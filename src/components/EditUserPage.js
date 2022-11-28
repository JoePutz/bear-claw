import React from "react";

function EditUserPage() {

    function handleSubmit(e) {
        
    }

    return (
        <form>
            <h1>Edit User</h1>
            <button onSubmit={handleSubmit}>Submit Changes</button>
            <label className="switch">
                <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            <label htmlFor="first name">First Name</label>
            <input type="text" placeholder="John" />
            <label htmlFor="last name">Last Name</label>
            <input type="text" placeholder="Smith" />
            <label htmlFor="title">Title</label>
            <input type="title" placeholder="Enter title" />
            <label htmlFor="role">Role</label>
            <input type="role" placeholder="System Admin" />
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