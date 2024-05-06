export default function TodoList(){
    return (
        <ul style={{
            backgroundColor: "black",
            color: "orange"
        }}>
            <li>TODO 1</li>
            <li>TODO 2</li>
            <li>TODO 3</li>
        </ul>
    );
}

// Inline style properties are written in camelCase. For example, HTML <ul style="background-color: black"> would be written as <ul style={{ backgroundColor: 'black' }}>  in your component.