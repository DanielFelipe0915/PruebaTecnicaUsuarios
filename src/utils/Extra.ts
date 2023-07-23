import Swal, { SweetAlertResult } from 'sweetalert2'

interface ConfirmProps {
    title?: string;
    message?: string;
}
export const confirm = ({ title = "Confirmar", message = "¿Desea continuar con esta operación?" }: ConfirmProps): Promise<SweetAlertResult> => {
    return Swal.fire({
        title: title,
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
    });
}