import React, { Component } from 'react';


class ModalContainer extends Component {

    render() {

        return (
            <div id="videoModal" className="modal fade" role="dialog">
                <div className="modal-dialog modal-sm modal-wide">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Challenge Video</h4>
                        </div>
                        <div className="modal-body">
                            <video id="compVideo" className="video-js vjs-default-skin" controls preload="auto" data-setup="{}" height="350" width="530"><source src="https://firebasestorage.googleapis.com/v0/b/challengemetest-ea2e0.appspot.com/o/test1.mp4?alt=media&token=1def8b71-9f28-4afc-a671-445fc9e97eaa" type="video/mp4" /></video>
                            <button type="button" className="btn btn-danger btn-4"><i className="fa fa-bomb"></i> | Like</button>
                            <button type="button" className="btn btn-danger btn-4" onClick={() => window.location.replace('http://www.beztbaba.com/UploadVideo')} ><i className="fa fa-bomb"></i> | Challenge</button>
                            <button type="button" className="btn btn-danger btn-4"><i className="fa fa-thumbs-o-down"></i> | Dislike</button>
                            <p ><a id="userProfileLink">User Name</a></p>
                            <p id="videoDescripton">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eros odi</p>
                            <div className="wrapper">
                                <h3>Top Comments</h3>
                                <p>asldkdlsadlkasjdkajsdlkajdlwkdjalkwdmalkwdmlakwdmlkawmd</p>
                                <p>asldkdlsadlkasjdkajsdlkajdlwkdjalkwdmalkwdmlakwdmlkawmd</p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalContainer;

