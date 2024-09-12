import { Sidebar} from 'primereact/sidebar';
import { Button } from 'primereact/button';       
import { useState } from 'react';
import { Avatar } from 'primereact/avatar';
import React from 'react';
   

const SidebarComponent=()=>{
    const [visible, setVisible]=useState(false)

    const customIcons = (
        <React.Fragment>
            <button className="p-sidebar-icon p-link mr-2">
                <span className="pi pi-search" />
            </button>
        </React.Fragment>
    );

    const customHeader = (
        <div className="flex align-items-center gap-2">
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
            <span className="font-bold">Amy Elsner</span>
        </div>
    );



    return <>
    
    <Sidebar visible={visible} onHide={() => setVisible(false)} icons={customIcons} header={customHeader} >
    <h2>Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    </Sidebar>
    <Button label='Boton' icon="pi pi-check" onClick={() => setVisible(true)}/>
    <Button label="Primary" />
    <Button label="Secondary" severity="secondary" />
    <Button label="Success" severity="success" />
    <Button label="Info" severity="info" />
    <Button label="Warning" severity="warning" />
    <Button label="Help" severity="help" />
    <Button label="Danger" severity="danger" />

    </>
}

export default SidebarComponent