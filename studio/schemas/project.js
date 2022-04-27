export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: "titile",
            type: "string"
        },
        {
            name: "date",
            type: "datetime"
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project Type",
            type: "string",
            options: {
                list: [
                    {
                        value: "personal",
                        title: "Personal"
                    },
                    {
                        value: "client",
                        title: "Client"
                    },
                    {
                        value: "university",
                        title: "University"
                    },
                ]
            }
        },
        {
            name: "link",
            titile: "Link",
            type: "url"
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string"
                }
            ],
            options: {
                layout: "tags"
            }
        }

    ]
}