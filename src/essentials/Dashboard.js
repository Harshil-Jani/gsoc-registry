import * as React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import "../app.css"
export default () => (
    <Card sx={{ height: "100vh", alignItems: "center", margin: "10px" }} className="card">
        <h1> GSoC Registry </h1>
        <p>
            Moreover like Github Commit Tracker. I think this can already be done with the github UI. But to just pull of simplicity and customizable requirements this was tweaked into the React Admin.
            This is not related to GSoC in a sense that we are manually hardcoding the entries. But maybe someday there can be a change to this thing. 
        </p>
        <h3>How to use ? </h3>
        <li>Go to Config file and in <b>"repo" : `owner/repo`</b> write the repository which you need to track</li>
        <li>Now create a <b>.env</b> file and then write <b>GH_TOKEN=gh_bla_bla_bla</b>.This is mandatory for getting your Octokit Github API accesss.</li>
        <li>Now, keep adding entries in Config if you need more and more repos. </li>
        <li>Bingo !! Just filter out the names into the search option ! <strong>Note : Use the exact Github Username for the person</strong></li>
    </Card>
);
