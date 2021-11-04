<template>
    <footer>
        <div class="footer-content">
            <p class='copyright'>© Navi Jisho</p>
            <img class='footer-logo' src="../assets/navijisho-logo3.png" alt="">
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer'
}

</script>

<style scoped>

footer {
    border-top: 1px solid #D7D7D7;
    margin-top: 3rem;
    background-color: #FAFAFA;
}

.footer-content {
    margin: 0 10vw 0 10vw;
    display: flex;
    justify-content: space-between;
}

.copyright {
    color: #7e7e7e;
}

.footer-logo {
    height: 45px;
    padding: 0.5rem;
}

</style>