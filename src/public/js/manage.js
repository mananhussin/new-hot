window.onload = () => {
    function getError(code) {
        switch (Number(code)) {
            case 1000:
                return 'Sorry, Invalid Values Detected';
            case 1001:
                return 'Sorry, the Body is not an object';
            case 1002:
                return 'Sorry, the prefix cannot exceed more than 5 characters';
            case 1003:
                return 'Sorry, that\'s an Invalid or Unknown Channel';
            case 1004:
                return 'Sorry, that\'s an Invalid or Unknown Category Channel';
            case 1005:
                return 'Sorry, that\'s an Invalid or Unknown Voice Channel';
            case 1006:
                return 'Sorry, that\'s an Invalid or Unknown Action';
            case 1007:
                return 'Sorry, that\'s an Invalid or Unknown Role';
            case 1008:
                return 'Sorry, that\'s an Invalid or Unknown Verification Type';
            case 1009:
                return 'Sorry, the Welcome/Farewell Message cannot exceed more than 1024 characters';
            case 1010:
                return 'Sorry, you need to put a valid duration';
            case 1011:
                return 'Sorry, Warn Threshold should be a number';
            case 1012:
                return 'Sorry, that is not a Boolean';
        }
    }
    $('button').on('click', save);
    function save(event) {
        event.preventDefault();
        const data = $(this).closest('form').serialize();
        $.ajax({
            type: 'post',
            method: 'post',
            url: '#',
            data,
            success: () => {
                Swal.fire({
                    icon: 'success',
                    position: 'bottom-end',
                    title: 'Your changes has been saved!',
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true,
                });
            },
            error: (e) => {
                console.log(e);
                const code = e.status;
                if (code === 500) {
                    window.location.href = '/500';
                    return;
                } else if (code === 403) {
                    window.location.href = '/403';
                    return;
                }
                Swal.fire({
                    icon: 'error',
                    position: 'bottom-end',
                    title: `${code} ${getError(code)}`,
                    showConfirmButton: false,
                    timer: 1500,
                    toast: true,
                });
            },
        });
        return false;
    }
}