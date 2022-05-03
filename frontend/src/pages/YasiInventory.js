//inventory page for staff to use
import { React, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import api from '../utils/api';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function YasiInventory(props) {
  //define constants or functionalities in here
  //perhaps, this is where we ought to divert?
  const [inventoryData, setInventoryData] = useState({});
  const [quantityModalData, setQuantityModalData] = useState({ modalVisibility: false, quantity: 0 });
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    api.get("/inventory/store/sjsu_pantry").then((req) => {
      const newData = req.data.map((item) => {
        return {
          ...item,
          'id': `${item.store_name}_${item.location}_${item.sku}`
        }

      })
      setInventoryData(newData)
    })

  })

  return (
    //TBD: After the navbar here, display options for a logged in user 
    <div>
      <NavBar />
      <section>
        <div className='inventory-table' style={{ height: 500, width: '100%' }}>
          <h1>Inventory Table</h1>
          <DataGrid initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns storeName, the other columns will remain visible
                storeName: false,
              },
            },
          }} columns={[
            {
              headerName: 'Store Name',
              field: 'store_name',
              width: 0
            },
            {
              headerName: 'Location',
              field: 'location',
              width: 130
            }, {
              headerName: 'SKU',
              field: 'sku',
              width: 130
            }, {
              headerName: 'Expiration Date',
              field: 'expiration_date',
              width: 150
            }, {
              headerName: 'Item Name',
              field: 'item_name',
              width: 130
            },
            {
              headerName: 'Estimated Supply Left (Days)',
              field: 'itemVelocity',
              width: 200
            }, {
              headerName: 'Quantity',
              field: 'quantity',
              width: 130
            }, {
              headerName: 'Units',
              field: 'units',
              width: 130
            },
            {
              field: "setNewItemButton",
              headerName: "",
              sortable: false,
              disableClickEventBubbling: true,
              width: 200,
              renderCell: (params) => {
                const onClick = (e) => {
                  e.stopPropagation(); // don't select this row after clicking

                  const api = params.api;
                  const thisRow = {};

                  api
                    .getAllColumns()
                    .filter((c) => c.field !== "__check__" && !!c)
                    .forEach(
                      (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
                    );
                  setSelectedItem(thisRow)
                  setQuantityModalData({ ...quantityModalData, quantity: thisRow.quantity, "modalVisibility": true })
                };

                return <Button onClick={onClick}>Subtract Quantity</Button>;
              }
            },
          ]} rows={inventoryData} pageSize={10}
            rowsPerPageOptions={[5]}
          />
        </div>
      </section>

      <Dialog open={quantityModalData.modalVisibility} onClose={() => { setQuantityModalData({ ...quantityModalData, "modalVisibility": false }) }}>
        <DialogTitle>Decrease Quantity</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please insert a number which is less than the current quantity! If you want to increase the quantity, add a new item!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="New Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={quantityModalData.quantity}
            onChange={(event) => setQuantityModalData({ ...quantityModalData, "quantity": event.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setQuantityModalData({ ...quantityModalData, "modalVisibility": false }) }}>Cancel</Button>
          <Button onClick={() => {
            setQuantityModalData({ ...quantityModalData, "modalVisibility": false })
            const body = {
              "storeName": selectedItem.store_name,
              "location": selectedItem.location,
              "sku": selectedItem.sku,
              "quantity": quantityModalData.quantity
            }
            api.post('inventory/removeItem', body).then((res) => {
              alert("Sucessfully changed quantity!")
            }).catch(err => console.log(err))

          }}>Decrease</Button>
        </DialogActions>
      </Dialog>


    </div>
  );

}
export default YasiInventory;
