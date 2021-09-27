import React, { Component } from "react";
import { ModalHeader } from "reactstrap";
import Button from "reactstrap/lib/Button";
import Form from "reactstrap/lib/Form";
import Label from "reactstrap/lib/Label";
import Modal from "reactstrap/lib/Modal";
import ModalBody from "reactstrap/lib/ModalBody";
import Photos from './ContactPhotosComponent'

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleForm(values) {
        this.toggleModal();
    }

    render(){
        return(
            <div className=' container mt-5'>
                <div className='row'>
                    <div className='col'>
                        <h3 className='font-weight-bold'>Video Production, Content Production, Promo Materials, Live Interviews …and more</h3><br/>
                        <h4>If there is a specific project I can help you navigate through or any idea you would love to bring to life, please contact me NOW!!!<br />The name is “WorkWit” for a reason. I do not take over your vision. I work with you to bring it to life!<br/>Please be deposit ready and have as much detail as possible that you would like to share to help with cultivating your creation!</h4><br/>
                    </div>
                </div>
                <div className='row justify-content-center'>
                    <Button onClick={this.toggleModal} className='btn-dark'>Click here to #WorkWitWeezle</Button>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Let's #WorkWitWeezle</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleForm}>
                                <div className='form-group'>
                                    <Label>Name *</Label>
                                    <div className='input-group'>
                                        <input name='firstName' required type='text' className='form-control' placeholder='First Name' 
                                        />
                                        <span className='input-group-addon'> </span>
                                        <input name='lastName' required type='text' className='form-control' placeholder='Last Name' 
                                        />
                                    </div>
                                </div>

                                <div className='form-group'>
                                    <Label>Email *</Label>
                                    <input name='email' required type='email' className='form-control' 
                                    />
                                </div>

                                <div className='form-group'>
                                    <Label>Subject *</Label>
                                    <input name='subject' required type='text' className='form-control'
                                    />
                                </div>

                                <div className='form-group'>
                                    <Label>Message *</Label>
                                    <textarea name ='message' required rows='4' type='text' className='form-control'
                                    />
                                </div>

                                <div className='form-group'>
                                    <Label>Phone Number</Label>
                                    <input name='phoneNumber' type='tel' className='form-control' 
                                    />
                                </div>

                                <Button className='btn-dark' type='submit'>Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div>
                <br />
                <Photos />
            </div>
        )
    }
}

export default Contact;