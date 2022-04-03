import { useDispatch } from "react-redux";
import { connect } from "react-redux";
// Selectors
import { getItemById } from "stores/selectors/formInputSelectors";
// Actions
import { deleteItem } from "stores/actions/formInputActions";
// Functions
import convertCurrency from "functions/convertCurrency";
// Components
import InputField from "components/forms/InputField";
import TrashCanButton from "components/buttons/TrashCanButton";

const ItemListItem = ({ id, formGroup, total }) => {
    const dispatch = useDispatch();

    // Variable to adjust padding of input fields
    const inputPadding = "1.7rem";

    const onDeleteClickHandler = (e, group, id) => {
        e.preventDefault();
        dispatch(deleteItem(group, id));
    };

    return (
        <>
            <InputField
                name="name"
                inputType="text"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
            />
            <InputField
                name="quantity"
                inputType="number"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
                min="0"
            />
            <InputField
                name="price"
                inputType="number"
                formGroup={formGroup}
                formId={id}
                inputPadding={inputPadding}
                step="0.01"
                min="0.00"
            />
            <InputField
                disabled
                name="total"
                inputType="text"
                formGroup={formGroup}
                formId={id}
                inputPadding="0"
                inputStyle={{ backgroundColor: "transparent" }}
                value={convertCurrency(total)}
            />
            <TrashCanButton
                onClick={(e) => onDeleteClickHandler(e, formGroup, id)}
            />
        </>
    );
};

function mapStateToProps(state, { id }) {
    const item = getItemById(state, id);
    const total = item.price * item.quantity;

    return {
        total: total,
    };
}

export default connect(mapStateToProps)(ItemListItem);
