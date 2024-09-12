import { Sidebar} from 'primereact/sidebar';
import { Button } from 'primereact/button';       
import { useState } from 'react';
        

const SidebarComponent=()=>{
    const [visible, setVisible]=useState(false)



    return <>
    <Sidebar visible={visible} onHide={() => setVisible(false)} /* icons={customIcons} */>
    <h2>Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    </Sidebar>
    {!visible && <Button icon="pi pi-plus" onClick={() => setVisible(true)}>ok</Button>}

    </>
}

export default SidebarComponent