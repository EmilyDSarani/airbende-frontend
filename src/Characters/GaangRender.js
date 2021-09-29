import React, { Component } from 'react'
import GaangList from './GaangList'
import Spinner from '../HeaderEct/Spinner'
import request from 'superagent'
export default class GaangRender extends Component {
    state={
        gaang:[],
        isLoading: false,
    }
    componentDidMount = async () =>{
        await this.fetch()
    }
   
    fetch= async()=>{
        this.setState({isLoading:true})
        const flameo = await request.get(`https://airbendercharacters.herokuapp.com/avatar`);
        this.setState({gaang: flameo.body, isLoading:false});
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.isLoading
                        ?<Spinner />
                        :<GaangList hotman = {this.state.gaang} />
                    }
                </ul>
            </div>
        )
    }
}
