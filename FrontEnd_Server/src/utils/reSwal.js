import Swal from "sweetalert2";
// 재사용하기 위한 alert 함수
const CustomSwal = styled.div`
  z-index: 10 !important;
`;

export const reSwal = (icon, text) => {
  return Swal.fire({
    icon: icon,
    text: text,
    showCancelButton: false,
    confirmButtonText: "확인",
  });
};
