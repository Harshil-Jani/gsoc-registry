import * as React from "react";
import * as RA from "react-admin";
import { TextInput } from "react-admin";
const Config = require('./config.json');
const CreateConfig = require('./CreateConfig.json')
let visibleFields = [];

export const FieldList = (props) => {
    const ResourceFields = RA.useResourceContext();
    visibleFields = Config[Config.findIndex(x => x.repo.toLowerCase() === ResourceFields.toLowerCase())].fields;
    const Filters = [
        <TextInput label="Github Username" source="commit.author.name" alwaysOn />,
    ]
    return (<RA.List filters={Filters}>
        <RA.Datagrid bulkActionButtons={false}
            sx={{
                "& .RaDatagrid-headerCell": {
                    backgroundColor: "gray",
                    fontSize: "120%",
                    fontWeight: "bold"
                },

            }}>
            {visibleFields.map((item, index) => {
                const FieldName = RA[item.type + 'Field'];
                return <FieldName source={item.path} label={item.header} key={index} />
            }
            )}
        </RA.Datagrid>
    </RA.List>
    )
}
