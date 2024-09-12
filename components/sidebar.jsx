import { Sidebar} from 'primereact/sidebar';
import { Button } from 'primereact/button';       
import { useState } from 'react';
     

const SidebarComponent=()=>{
    const [visible, setVisible]=useState(false)



    return <>
    
    <Sidebar visible={visible} position='right' onHide={() => setVisible(false)} /* icons={customIcons} */ >
    <h2>Sidebar</h2>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    </Sidebar>
    {!visible && <Button label='Boton' icon="pi pi-check" onClick={() => setVisible(true)}/>}

    </>
}

export default SidebarComponent