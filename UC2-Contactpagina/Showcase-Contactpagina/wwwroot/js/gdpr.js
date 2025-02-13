class GDPR {

    constructor() {
        this.showStatus();
        this.showContent();
        this.bindEvents();

        if(this.cookieStatus() !== 'accept') this.showGDPR();
    }

    bindEvents() {
        
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.cookieStatus('accept');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
        });

        
        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            console.log('click rejected');
            this.cookieStatus('reject');
            this.showStatus();
            this.showContent();
            this.hideGDPR();
        });

    }

    showContent() {
        this.resetContent();
        const status = this.cookieStatus() == null ? 'not-chosen' : this.cookieStatus();
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');

    }

    resetContent(){
        const classes = [
            '.content-gdpr-accept',

//student uitwerking
            
            '.content-gdpr-not-chosen'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    showStatus() {
        document.getElementById('content-gpdr-consent-status').innerHTML =
            this.cookieStatus() == null ? 'Niet gekozen' : this.cookieStatus();
    }

    cookieStatus(status) {
        if (status) {
            // Set the cookie
            this.saveMetadata();
            document.cookie = `gdpr-consent-choice=${status}; path=/; Expires=${new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString()};`;
        }

        // Get the cookie
        const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
            const [key, value] = cookie.split('=');
            acc[key] = value;
            return acc;
        }, {});

        return cookies['gdpr-consent-choice'];
    }


//student uitwerking
    saveMetadata() {
        const now = new Date();

        // Create a metadata object with the current date and time
        const metadata = {
            datum: now.toLocaleDateString('en-GB'), // Formats as "dd/mm/yyyy"
            tijd: now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) // Formats as "hh:mm"
        };

        // Convert the metadata object to a JSON string
        const result = JSON.stringify(metadata);

        // Save it in localStorage
        localStorage.setItem('metadata', result);
    }


    hideGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }

}

const gdpr = new GDPR();

