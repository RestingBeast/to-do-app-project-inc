const ConfirmMoadal = ({ onClick }) => (
    <div className="modal" id="confirm-modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Warning</h3>
            <p className="py-4">Are you sure you want to do this action?</p>
            <div className="modal-action">
                <a href="#" onClick={() => onClick()} className="btn btn-success">Yes</a>
                <a href="#" className="btn btn-error">No</a>
            </div>
        </div>
    </div>
)

export default ConfirmMoadal;