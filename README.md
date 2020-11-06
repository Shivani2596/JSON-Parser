# JSON-ParserCreate a component to render JSON data. The JSON schema can hold different types of data i.e Date, string, number, List.
Use the following sample JSON to dynamically render each JSON field on the screen.
For primitive types, render the data as a Label-Value pair.
For List type data, render a table with the key-names in the object as the column names.
Schema can have nested Tables as well. For that purpose, if a column is of type List, give the user the ability to view the nested table for that column (e.g: a ‘table’ icon on the column).
You need to convert the keyName from camelCase to readable labels: (e.g: ‘nodeOne’ to ‘Node One’).
Note: The code needs to be dynamic to handle this type of Schema for any input.
{
    "nodeOne": "John Doe",
    "nodeTwo": "05/06/2020",
    "nodeThree": 777,
    "nodeFour": [
        {"elementOne": "B Street"},
        {"elementTwo": "City"},
        {"elementThree": "Area - 591323"},
        {"elementFour": [
            {"elementFive": "06/07/2020"},
            {"elementSix": 123}
        ]}
    ]
}

Expected Result:
Node One : Text input
Node Two: Date picker input
Node Three: Number input
Node Four:
Element One	Element Two	Element Three	Element Four
Text input	Number input	Number input	 

Element Four:
Element Five	Element Six
Date picker input	Number input

