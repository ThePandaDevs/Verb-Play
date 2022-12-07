import Notify from "simple-notify";

export const popUpNotification = (status,title,text,showIcon,showCloseButton,autoclose) => {
    new Notify({
        status: status,
        title: title,
        text: text,
        effect: 'fade',
        speed: 300,
        customClass: null,
        customIcon: null,
        showIcon: showIcon,
        showCloseButton: showCloseButton,
        autoclose: autoclose,
        autotimeout: 3000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}