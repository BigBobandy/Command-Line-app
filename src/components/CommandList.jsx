import React, { useState } from "react";
import "./styles/CommandList.css";

function CommandList() {
  const [activeList, setActiveList] = useState("windows");

  return (
    <div className="CommandList">
      <h2>
        <code>Commands List</code>
      </h2>

      <div>
        <button onClick={() => setActiveList("windows")}>Windows</button>
        <button onClick={() => setActiveList("mac-linux")}>Mac / Linux</button>
      </div>

      {activeList === "windows" && (
        <div>
          <h3>Windows</h3>
          <ul>
            <li>
              <code>echo</code> - Display a line of text or a variable value
            </li>
            <li>
              <code>dir</code> - List directory contents
            </li>
            <li>
              <code>cd</code> - Change the current directory
            </li>
            <li>
              <code>type</code> - Display the contents of a file
            </li>
            <li>
              <code>ipconfig</code> - Display network configuration information
            </li>
            <li>
              <code>systeminfo</code> - Display detailed system information
            </li>
            <li>
              <code>tasklist</code> - List all currently running processes
            </li>
            <li>
              <code>sfc /scannow</code> - Scan and repair system files
            </li>
            <li>
              <code>netstat</code> - Display active network connections and
              listening ports
            </li>
            <li>
              <code>find</code> - Search for a text string in a file.
            </li>
            <li>
              <code>chkdsk</code> - Check a disk for errors and repair them
            </li>
            <li>
              <code>ping</code> - Test network connectivity to another host
            </li>
            <li>
              <code>tracert</code> - Trace the route packets take to a
              destination
            </li>
            <li>
              <code>nslookup</code> - Query the DNS for a specific domain or IP
              address
            </li>
          </ul>
        </div>
      )}

      {activeList === "mac-linux" && (
        <div>
          <h3>Mac / Linux</h3>
          <ul>
            <li>
              <code>echo</code> - Display a line of text or a variable value
            </li>
            <li>
              <code>ls</code> - List directory contents
            </li>
            <li>
              <code>cd</code> - Change the current directory
            </li>
            <li>
              <code>cat</code> - Display the contents of a file
            </li>
            <li>
              <code>ifconfig</code> - Display network configuration information
            </li>
            <li>
              <code>uname -a</code> - Display detailed system information
            </li>
            <li>
              <code>ps</code> - List all currently running processes
            </li>
            <li>
              <code>top</code> - Display dynamic real-time information about
              running processes
            </li>
            <li>
              <code>lsof</code> - List open files and the processes that opened
              them
            </li>
            <li>
              <code>df</code> - Display disk space usage
            </li>
            <li>
              <code>du</code> - Display file and directory space usage
            </li>
            <li>
              <code>ping</code> - Test network connectivity to another host
            </li>
            <li>
              <code>traceroute</code> - Trace the route packets take to a
              destination
            </li>
            <li>
              <code>dig</code> - Query the DNS for a specific domain or IP
              address
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default CommandList;
