import React from "react";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Checkbox, Button } from 'semantic-ui-react';
import { blueGrey } from '@mui/material/colors';

function EditUserPage() {

    function handleSubmit(e) {

    }

    return (
        <form>
            {/* This one is the first */}
            <img src={"https://i.imgur.com/o0B4c0q.jpg"} alt ="Profile" />
            <CameraAltIcon sx={{ color: blueGrey[50]}}/>
            {/* This next section is the third chunk */}
            <h1>Edit User</h1>
            <Button background color='light green' >Submit Changes</Button>
            <button onSubmit={handleSubmit}>Submit Changes</button>
            <label htmlFor="light">LIGHT </label>

            <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
            {/* <div className="toggle-checkbox">
                <input id="status"
                    type="checkbox"
                    name="status">
                        <label for="status">
                            <div class="status-switch"
                                data-unchecked="Off"
                                data-checked="On">    
                            </div>
                        </label>
                </input>
            </div> */}
            <Checkbox toggle basic color='red' />
            <label htmlFor="dark"> DARK</label>
            <label htmlFor="stable">STABLE </label>
            <Checkbox toggle />
            <label htmlFor="beta"> BETA</label>
            {/* The third of the top segment */}
            <button>< LinkedInIcon/>PROFILE CONNECTED</button>
            <p>Re-Connect Linkedin Profile</p>
            {/* Section 2.1 */}
            <label htmlFor="first name">First Name </label>
            <input type="text" placeholder="John" />
            <label htmlFor="last name">Last Name</label>
            <input type="text" placeholder="Smith" />
            <Button color="red"><MoreHorizIcon /></Button>
            <label htmlFor="title">Title</label>
            <input type="title" placeholder="Enter title" />
            <label htmlFor="role">Role</label>
            <input type="role" placeholder="System Admin" />
            {/* Section 2.2 */}
            <label htmlFor="eamil">Email</label>
            <input type="email" placeholder="test@test.com" />
            <label htmlFor="phone">Phone</label>
            <input type="phone" placeholder="Enter phone" />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="****" />
            <label htmlFor="default note action">Default Note Action</label>
            <input type="default note action" placeholder="Client Submission" />
            <label htmlFor="default landing page upon longin">Default Landing Page upon Login</label>
            <input type="default landing page upon login" placeholder="Dashboard"/>
            {/* Section 2.3 */}
            <label htmlFor="alert types">Alert Types</label>
            <div className="btn-group" data-toggle="buttons">
                <input type="checkbox" value="Tasks" />
                <input type="checkbox" value="Appointments" />
                <input type="checkbox" value="Notes" />
                <input type="checkbox" value="Leads" />
                <input type="checkbox" value="Candidates" />
                <input type="checkbox" value="Contacts" />
                <input type="checkbox" value="Companies" />
                <input type="checkbox" value="Submissions" />
            </div>
            <label htmlFor="delivery method">Delivery Method</label>
            <div className="btn-group" data-toggle="buttons">
                <input type="checkbox" value="Email" />
                <input type="checkbox" value="Slack" />
                <p>SMS (contact us to enable this method)</p>
                <p>MS Teams (contact us to enable this method)</p>
                <p>Zoom (contact us to enable this method)</p>
            </div>

        
        
        
        
        </form>
    )
    
}

export default EditUserPage