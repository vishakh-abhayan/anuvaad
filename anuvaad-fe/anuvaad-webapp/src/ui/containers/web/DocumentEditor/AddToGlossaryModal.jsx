import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import TextField from '../../../components/web/common/TextField';
import { translate } from "../../../../assets/localisation";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography'

class AddToGlossaryModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            word: ""
        }

    }

    handleInputFieldChange = (e) => {
        this.setState({ word: e.target.value })
    }

    render() {
        return (
            <div>
                <FormControl style={{
                    position: 'absolute',
                    width: "30%",
                    height: "20%",
                    top: "25%",
                    left: '35%',
                    paddingTop: '3%',
                    paddingBottom: '1%',
                    outline: 0,
                    backgroundColor: "white"
                }} align='center' fullWidth
                >
                    <Typography variant="h5">{this.props.selectedWords}</Typography>
                    <TextField id="email" type="text" value={this.state.word} placeholder="Add to glossary"
                        margin="dense" varient="outlined" style={{ width: '80%', marginBottom: '4%', backgroundColor: 'white' }}
                        disabled="true"
                        onChange={this.handleInputFieldChange}
                    />

                    <div style={{ position: 'relative', }}>
                        <Button
                            variant="contained" aria-label="edit" style={{
                                width: '40%', marginRight: '2%', marginBottom: '2%', marginTop: '2%', borderRadius: '20px', height: '45px', textTransform: 'initial', fontWeight: '20px',
                                backgroundColor: '#1ca9c9', color: 'white',
                            }} disabled={this.state.loading}
                            // onClick={() => this.props.saveWord(this.state.word)}
                        >
                            {/* {this.state.loading && <CircularProgress size={24} className={'success'} style={{
                                color: 'green[500]',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: -12,
                                marginLeft: -12,
                            }} />} */}
                            Save
                        </Button>

                        <Button
                            variant="contained" aria-label="edit" style={{
                                width: '40%', marginBottom: '2%', marginTop: '2%', borderRadius: '20px', height: '45px', textTransform: 'initial', fontWeight: '20px',
                                backgroundColor: this.state.loading ? 'grey' : '#1ca9c9', color: 'white', color: 'white',
                            }}
                            onClick={this.props.handleClose}
                        >
                            Cancel
                        </Button>
                    </div>
                </FormControl>
            </div>
        );
    }
}


export default AddToGlossaryModal;