import React from 'react';



class ProfileStatus extends React.Component {

    state ={ 
        editMode: false,
        state: this.props.status
    }

    activedEditMode = ( ) => {
        this.setState({
            editMode: true
        })
    }

    deactivedEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode && 
                <div className="">
                <span onDoubleClick={ this.activedEditMode}>{this.props.status || "no status"}</span>
                </div>
                }
                
                {this.state.editMode &&
                <div className="">
                    <input onChange={ this.onStatusChange} autoFocus={true} onDoubleClick={ this.deactivedEditMode} type={this.state.status} />
                </div>
                }
                
            </div>
    
        )
    }
    
}

export default ProfileStatus;