import React, {useState, useEFfect, useEffect} from "react";
import { Checkbox, Button } from 'semantic-ui-react';
import { blueGrey } from '@mui/material/colors';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function EditUserPageTwo() {
    const [user, setUser] = useState([])
    const [hidden, setHidden] = useState(true)
    const [imageFile, setImageFile] = useState()
    const [refresh, setRefresh] = useState(false)
    const [picture, setPicture] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const [beta, setBeta] = useState(false)
    const [linkedIn, setLinkedIn] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [title, setTitle] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [defaultNoteAction, setDefaultNoteAction] = useState('')
    const [defaultLandingPage, setDefaultLandingPage] = useState('')
    // const [alerts, setAlerts] = useState([])
    const [deliveryMethod, setDeliveryMethod] = useState([])
    const [sMS, setSMS] = useState(false)
    const [mSTeam, setMSTeam] = useState(false)
    const [zoom, setZoom] = useState(false)
    const [formData, setFormData] = useState({
        darkMode: false,
        beta: false,
        image: [],
        firstName: "",
        lastName: "",
        title: "",
        role: "",
        email: "",
        phone: "",
        password: "",
        defaultNoteAction: "",
        defaultLandingPage: "",
        alertTasks: false,
        alertAppointments: false, 
        alertNotes: false,
        alertLeads: false, 
        alertCandidates: false,
        alertContacts: false,
        alertCompanies: false,
        alertSubmissions: false,
        deliveryEmail: false,
        deliverySlack: false
    })

    // useEffect(() => {
    //     fetch('/users')
    //         .then((response) => response.json())
    //         .then((data) => setUser(data))
    // }, [refresh]);

    function handleSubmit (e) {
        e.preventDefault();
        console.log(formData)
        // fetch(`/users/${user.id}`, {
        //     method: "PATCH", 
        //     headers: {
        //         "Content-Type": "application/json",
        //     }, 
        //     body: JSON.stringify({
        //         //This is where it all goes
        //     }),
        // })
        // .then((r) => r.json())
        // .then(() => {
        //     setHidden(false)
        //     setRefresh(!refresh)
        // })
    }

    function handlePictureClick() {
        setHidden(!hidden)
    }

    function handleDarkMode() {
        setFormData({...formData, darkMode: !formData.darkMode})
        //The stuff I need to make a dark mode
    }

        function testClick(e) {
            e.preventDefault()
            if (e.target.className === 'fluid ui button' ) {
                e.target.className = 'fluid ui button active'
                setFormData({...formData, [e.target.value]: true})
            }
            else {
                e.target.className = "fluid ui button"
                setFormData({...formData, [e.target.value]: false})
            } 
        }

        function toggleBeta() {
            setFormData({...formData, beta: !formData.beta})
        }

        function handleImageSubmit(e) {
            e.preventDefault()
            setFormData({...formData, image: imageFile})
            setHidden(!hidden)
            console.log(imageFile)
        }

        function handleSelectFiles(e) {
            setImageFile(e.target.files[0])
        }


    return (
        <form>
            <Grid container direction="column">
                <Grid item>
                    <Grid container spacing={4}>
                        <Grid item xs={2}>
                        {hidden ? <><img src={"https://i.imgur.com/o0B4c0q.jpg"} alt ="Profile" />
                        <br></br>
                        <div className="hoverHand">
                        <CameraAltIcon onClick={handlePictureClick}/>
                        </div></> 
                        :
                        <div>
                            <input type="file" name="profile" onChange={handleSelectFiles}/>
                            <div>
                                <button onClick={handleImageSubmit}>Submit Image</button>
                            </div>
                        </div>}
                        </Grid>
                        <Grid item xs={5}>
                            <h2>Edit Profile</h2>
                            <br></br>
                            <Grid container spacing={2} >
                                <Grid item>
                                    <input type="submit" value="Submit Changes" onClick={handleSubmit}/>
                                </Grid>
                                <Grid item>
                                    <label htmlFor="light">LIGHT </label>
                                
                                </Grid>
                                <Grid item>
                                    <Checkbox toggle id="darkMode"
                                    onChange={handleDarkMode}
                                />
                                </Grid>
                                <Grid item>
                                    <label htmlFor="dark">DARK</label>
                                </Grid>
                                <Grid item>
                                    <label htmlFor="stable">STABLE </label>
                                </Grid>
                                <Grid item>
                                    <Checkbox toggle id="beta" 
                                        onChange={toggleBeta}
                                        />
                                </Grid>
                                <Grid item>
                                    <label htmlFor="beta"> BETA</label>
                                </Grid>
                                
                            </Grid>
                            
                        </Grid>
                        <Grid item>
                            <button className="linkedInButton">< LinkedInIcon/>PROFILE CONNECTED</button>
                            <p>Re-Connect Linkedin Profile</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container >
                    <Grid item xs={3}>
                        <label htmlFor="first name">First Name </label>
                        <br></br>
                        <input type="text" id="firstName" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} placeholder="Enter first name" />
                        <br></br>
                        <br></br>
                        <label htmlFor="last name">Last Name</label>
                        <br></br>
                        <input type="text" id="lastName" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} placeholder="Enter last name" />
                        {/* <Button color="red"><MoreHorizIcon /></Button> */}
                        <br></br>
                        <br></br>
                        <label htmlFor="title">Title</label>
                        <br></br>
                        <input type="text" id="title" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} placeholder="Enter title" />
                        <br></br>
                        <br></br>
                        <label htmlFor="role">Role</label>
                        <br></br>
                        <select name="default-list" id="role" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} >
                            <option disabled defaultValue> -- select an option -- </option>
                            <option value="system admin">System Admin</option>
                            <option value="power user">Power User</option>
                            <option value="recruiting end user">Recruiting End User</option>
                            <option value="sales end user">Sales End User</option>
                        </select>
                    </Grid>
                    <Grid item xs={3}>
                        <label htmlFor="email">Email</label>
                        <br></br>
                        <input type="text" id="email" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} placeholder="Enter email address" />
                        <br></br>
                        <br></br>
                        <label htmlFor="phone">Phone</label>
                        <br></br>
                        <input type="text" id="phone" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} placeholder="Enter phone" />
                        <br></br>
                        <br></br>
                        <label htmlFor="password">Password</label>
                        <br></br>
                        <input type="password" id="password" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} placeholder="Enter password" />
                        <br></br>
                        <br></br>
                        <label htmlFor="default note action">Default Note Action</label>
                        <br></br>
                        <select name="default-list" id="defaultNoteAction" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}} >
                            <option disabled defaultValue> -- select an option -- </option>
                            <option value="client submission">Client Submission</option>
                            <option value="someone elses submission">Someone Else's Submission</option>
                            <option value="maybe just a normal note">Maybe Just A Normal Note?</option>
                        </select>
                        <br></br>
                        <br></br>
                        <label>Default Landing Page upon Login</label>
                        <br></br>
                        <select name="default-list" id="defaultLandingPage" onChange={(e) => {setFormData({...formData, [e.target.id]: e.target.value})}}>
                            <option disabled defaultValue> -- select an option -- </option>
                            <option value="dashboard">Dashboard</option>
                            <option value="home">Home</option>
                            <option value="dunno">I don't know, a third one</option>
                        </select>
                    </Grid>
                    <Grid item>
                        <label>Alert Type</label>
                        <br></br>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <button className="fluid ui button" value="alertTasks" onClick={testClick}>Tasks</button>
                                <br></br>
                            </Grid>
                            <Grid item xs={4}>
                                <button className="fluid ui button" value="alertAppointments" onClick={testClick}>Appointments</button>
                            </Grid>
                            <Grid item xs={2.5}>
                                <button className="fluid ui button" value="alertNotes" onClick={testClick}>Notes</button>
                            </Grid>
                            <Grid item xs={2.5}>
                                <button className="fluid ui button" value="alertLeads" onClick={testClick}>Leads</button>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <button className="fluid ui button" value="alertCandidates" onClick={testClick}>Candidates</button>
                                <br></br>
                            </Grid>
                            <Grid item xs={4}>
                                <button className="fluid ui button" value="alertContacts" onClick={testClick}>Contacts</button>
                            </Grid>
                            <Grid item xs={4}>
                                <button className="fluid ui button" value="alertCompanies" onClick={testClick}>Companies</button>
                            </Grid>
                        </Grid>
                        
                        <button className="fluid ui button" value="alertSubmissions" onClick={testClick}>Submissions</button>
                        <br></br>
                        <label>Delivery Methods</label>
                        <br></br>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <button className="fluid ui button" value="deliveryEmail" onClick={testClick}>Email</button>
                            </Grid>
                            <Grid item xs={6}>
                                <button className="fluid ui button" value="deliverySlack" onClick={testClick}>Slack</button>
                            </Grid>
                            
                            
                        </Grid>
                        <br></br>
                        {sMS ? <></> : <p>SMS (contact us to enable this method)</p>}
                        <br></br>
                        {mSTeam ? <></> : <p>MS Team (contact us to enable this method)</p>}
                        <br></br>
                        {zoom ? <></> : <p>Zoom (contact us to enable this method)</p>}
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )
}

export default EditUserPageTwo;





{/* <Button onClick={console.log('hi')}/> */}
            {/* <select multipe='true' value='alert' onChange={(e)=> {handleAlertSelect(e.target.selectedOptions)}}>
                <button value="test">Test</button>
                <option value="tasks">Tasks</option>
                <option value="appointments">Appointments</option>
                <option value="notes">Notes</option>
                <option value="leads">Leads</option>
                <option value="candidates">Candidates</option>
                <option value="contacts">Contacts</option>
                <option value="companies">Companies</option>
                <option value="submissions">Submissions</option>
            </select> */}

                                            {/* <label className="switch" >
                                    
                                    <input type="checkbox" onChange/>
                                    <span className="slider round" ></span>
                                </label> */}