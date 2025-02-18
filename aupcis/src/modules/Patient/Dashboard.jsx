import React from 'react'
import { Link } from "react-router-dom"

export default function DashBoard() {
    return(
        <ul className="DashboardList">
            <div className="FirstRow">
                <li className="Card-Icons">
                    <i class="bi bi-0-circle" id="Font"></i>
                    <Link to="/Schedule"><button className="SchedAPP">Schedule Appointments</button></Link>
                </li>
                <li className="Card-Icons">
                        <i class="bi bi-0-circle" id="Font"></i>
                        <Link to="/Profile"><button className="SchedAPP">Check Profile</button></Link>
                </li>
            </div>
            <div className="SecondRow">
                <li className="Card-Icons">
                    <i class="bi bi-0-circle" id="Font"></i>
                    <Link to="/Medical Certificate"><button className="SchedAPP">Medical Certificates</button></Link>
                </li>
                <li className="Card-Icons">
                    <i class="bi bi-0-circle" id="Font"></i>
                    <Link to="/Feedback"><button className="SchedAPP">Give Feedback</button></Link>
                </li>
            </div>
            <div className="ThirdRow">
                <li className="Card-Icons">
                    <i class="bi bi-0-circle" id="Font"></i>
                    <Link to="/Billing"><button className="SchedAPP">Billing Information</button></Link>
                </li>
                <li className="Card-Icons">
                    <i class="bi bi-0-circle" id="Font"></i>
                    <Link to="/Appointment History"><button className="SchedAPP">Appointment History</button></Link>
                </li>
            </div>
        </ul>
    )
}
