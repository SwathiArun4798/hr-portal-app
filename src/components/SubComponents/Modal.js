import  {Modal}  from "react-bootstrap";

export const MyModal = (props) => {
    console.log(props);
    
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>{props.children}</Modal.Body>
        </Modal>
    );
}
