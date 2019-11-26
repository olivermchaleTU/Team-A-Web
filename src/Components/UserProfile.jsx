import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Container, Card, Image, Badge, Button } from 'react-bootstrap';
import axios from 'axios';
import user from './user.png'
import { useParams } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";

class UserProfile extends React.Component {
    state = {
        user: {

        }
    }
    render() {
        if (!this.state.user.id) {
            return <div />
        }
        return (
            <>
                <Container className="mt center">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                {this.state.user.firstName + ' ' + this.state.user.lastName}
                            </Card.Title>
                            {this.getLastDate()}
                            <Image src={user} className="user-image"/>
                            <br/>
                            {this.state.user.address}
                            <br/>
                            {this.state.user.postcode}
                            <br/>
                            {this.state.user.email}
                            <br/>
                            {this.state.user.phoneNumber}
                            <br/>
                            {this.state.user.canPurchase ? <Badge variant="success mr">Can Purchase</Badge> : <Badge variant="danger">Purchase Disabled</Badge>}
                            {this.state.user.isDeleteRequested? 
                                <Badge variant="danger ml">Delete Requested</Badge> 
                            : 
                                <React.Fragment><br/> <Button onClick={this.requestDelete} size = "sm" className="mt-sm" variant="danger">Request Delete</Button></React.Fragment>}
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }

    componentDidMount() {
        var id = this.getQueryParams(this.props.location.pathname);
        axios.get(`https://localhost:44375/api/accounts/getcustomer?accountId=${id}`).then(resp =>  {
            this.setState({
                user: resp.data
            });
            this.test();
        })
    }

    requestDelete = ($event) => {
        axios.put(`https://localhost:44375/api/accounts/requestAccountDelete?accountId=${this.state.user.id}`, {
            accountId: this.state.user.id
        }).then(resp => {
            var updatedUser = this.state.user
            updatedUser.isDeleteRequested = true
            this.setState({
                user: updatedUser
            })
        }).catch(err => {
            console.log(err);
        })
    }

    getLastDate = () => {
        var date = new Date(this.state.user.loggedOnAt)
        return <p className="opaque">Last logged on at {date.toDateString()}</p>
    }

    test() {
        console.log(this.state.user);
    }

    getQueryParams(path) {
        return path.substr(path.length - 36)
    } 

}



export default UserProfile;