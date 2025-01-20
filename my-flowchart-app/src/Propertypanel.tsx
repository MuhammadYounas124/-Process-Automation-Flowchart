const propertypanel = ({selectednode}:{selectednode:any}) => {

    if (!selectednode){

        return(
             <div style={{padding:'10px'}}>No Node Selected</div>
        );
    }

    return (

        <div style={{padding:'10px', border:'1px solid #ddd', width:'300px'}}>
            <h4>Node properties</h4>
            <label>
                Label:
                <input
                 type="text"
                 value={selectednode.data.label}

                />
            </label>
        </div>

    )

};

export default propertypanel;