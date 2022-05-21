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
  const [addItemModalData, setAddItemModalData] = useState({ modalVisibility: false, store_name: "", location: "", sku: "", quantity: 0, units: "", item_name: ""});
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    api.get("/inventory/store/").then((req) => {
      const newData = req.data.map((item) => {
        return {
          ...item,
          'id': `${item.store_name}_${item.location}_${item.sku}`
        }

      })
      setInventoryData(newData)
    })

  }, [quantityModalData.modalVisibility, addItemModalData.modalVisibility])

  return (
    //TBD: After the navbar here, display options for a logged in user 
    <div>
      <NavBar />
      <button><Link to="/yasimainstaff">Return to Main</Link></button>
      <section>
        <div className='inventory-table' style={{ height: 500, width: '100%' }}>

          <div style={{display: "flex", justifyContent:"space-between", padding: '10px'}}>
            <h1 className='ib'>Inventory Table</h1>
            <div style={{alignSelf: "center"}}>
            <Button onClick={(event) => setAddItemModalData({...addItemModalData, modalVisibility:true})} variant= "contained" className='ib'>Add Item</Button>
            </div>
          </div>
          <DataGrid initialState={{
            columns: {
              columnVisibilityModel: {
                // Hide columns storeName, the other columns will remain visible
                store_name: false,
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
              headerName: 'Items taken per day',
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

      <Dialog open={addItemModalData.modalVisibility} onClose={() => { addItemModalData({ ...addItemModalData, "modalVisibility": false }) }}>
        <DialogTitle>Add an Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="string"
            fullWidth
            variant="standard"
            value={addItemModalData.location}
            onChange={(event) => setAddItemModalData({ ...addItemModalData, "location": event.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="sku"
            label="SKU"
            type="string"
            fullWidth
            variant="standard"
            value={addItemModalData.sku}
            onChange={(event) => setAddItemModalData({ ...addItemModalData, "sku": event.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="expiry"
            label="Expiry Date"
            type="date"
            fullWidth
            variant="standard"
            value={addItemModalData.expiry_date}
            onChange={(event) => setAddItemModalData({ ...addItemModalData, "expiry_date": event.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="item_name"
            label="Item Name"
            type="string"
            fullWidth
            variant="standard"
            value={addItemModalData.item_name}
            onChange={(event) => setAddItemModalData({ ...addItemModalData, "item_name": event.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="quantity"
            label="Quantity"
            type="number"
            fullWidth
            variant="standard"
            value={addItemModalData.quantity}
            onChange={(event) => setAddItemModalData({ ...addItemModalData, "quantity": event.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            id="units"
            label="Units"
            type="string"
            fullWidth
            variant="standard"
            value={addItemModalData.units}
            onChange={(event) => setAddItemModalData({ ...addItemModalData, "units": event.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setAddItemModalData({ ...addItemModalData, "modalVisibility": false }) }}>Cancel</Button>
          <Button onClick={() => {
            setAddItemModalData({"modalVisibility": false })
            const body = {
              "storeName": addItemModalData.store_name,
              "location": addItemModalData.location,
              "sku": addItemModalData.sku,
              "expiry_date": addItemModalData.expiry_date,
              "item_name": addItemModalData.item_name,
              "quantity": addItemModalData.quantity,
              "units": addItemModalData.units
            }
            console.log(body)
            api.post('inventory/addItem', body).then((res) => {
              alert("Sucessfully added item!")
            }).catch(err => console.log(err))

          }}>Add Item</Button>
        </DialogActions>
      </Dialog>

    </div>
  );

}
export default YasiInventory;
