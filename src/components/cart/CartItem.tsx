import styled from "styled-components";
import { Cart } from "../../models/cart.model";
import Button from "../common/Button";
import Title from "../common/Title";
import { formatNumber } from "../../utils/format";
import CheckIconButton from "./CheckIcomButton";
import { useMemo } from "react";
import { useAlert } from "../../hook/useAlert";

interface Props {
  cart: Cart;
  checkedItems: number[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

function CartItem({ cart, checkedItems, onCheck, onDelete }: Props) {
  const { showConfirm } = useAlert();

  const isChecked = useMemo(
    () => checkedItems.includes(cart.id),
    [checkedItems, cart.id]
  );

  const handleCheck = () => {
    onCheck(cart.id);
  };

  const handleDelete = () => {
    showConfirm("정말 삭제하시겠습니까?", () => {
      onDelete(cart.id);
    });
  };

  return (
    <CartItemStyle>
      <div className="info">
        <div className="check">
          <CheckIconButton isChecked={isChecked} onCheck={handleCheck} />
        </div>
        <div>
          <Title size="medium" color="text">
            {cart.title}
          </Title>
          <p className="summary">{cart.summary}</p>
          <div className="price">{formatNumber(cart.price)}원</div>
          <p className="quantity">{cart.quantity} 권</p>
        </div>
      </div>
      <Button size="medium" scheme="normal" onClick={handleDelete}>
        장바구니 삭제
      </Button>
    </CartItemStyle>
  );
}

const CartItemStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 12px;

  .info {
    display: flex;
    align-items:start
    flex: 1;

    .check{
      width: 40px;
      flex-shrink: 0;
    }

    p {
      padding: 0 0 8px 0;
      margin: 0;
    }
  }
`;

export default CartItem;
