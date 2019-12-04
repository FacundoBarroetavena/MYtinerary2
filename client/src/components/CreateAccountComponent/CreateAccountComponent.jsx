import React from 'react';

const CreateAccountComponent = ({handleSubmit}) => {
    return (
        <div>

            <h1>Create your account here!</h1>

            {/* <form onSubmit={(e) => handleSubmit(e)}> */}
            <form onSubmit={handleSubmit}>
                <label>Username:
                    <input type="text" name="username" id="txtUsername"/>
                </label>
                <label>Password:
                    <input type="password" name="password" id="txtPassword"/>
                </label>
                <label>Your Image (URL):
                    <input type="text" name="image" id="txtImage"/>
                </label>E-Mail:
                <label>
                    <input type="email" name="email" id="txtEmail"/>
                </label>
                <label>First Name:
                    <input type="text" name="firstName" id="txtName"/>
                </label>
                <label>Last Name:
                    <input type="text" name="lastName" id="txtLastName"/>
                </label>
                <label>Country:
                    <select name="country" id="cmbCountry">
                        <option value="argentina">Argentina</option>
                        <option value="uruguay">Uruguay</option>
                        <option value="azerbaijan">Azerbaijan</option>
                        <option value="north_korea">North Korea</option>
                    </select>
                </label>
                
                <input type="submit"/>
            </form>
            
        </div>
    );
};

export default CreateAccountComponent;