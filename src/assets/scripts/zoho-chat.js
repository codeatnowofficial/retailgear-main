var $zoho = $zoho || {};
$zoho.salesiq = $zoho.salesiq || {
    widgetcode: "d34c292c4c7ab49aab11c9ac2a7015df0a61c0a5dbc9d5920884b0295441464cf64cf190a147e171262a6d86a3c93321",
    values: {},
    ready: function () {
        const language = localStorage.getItem('language') || 'en';
        $zoho.salesiq.language(language);
    }
};

var d = document;
s = d.createElement("script");
s.type = "text/javascript"; 
s.id = "zsiqscript";
s.defer = true;

// s.src = "https://salesiq.zoho.eu/widget";
s.src = "https://desk.zoho.eu/portal/api/web/inapp/126422000004039001?orgId=20085839305";
t = d.getElementsByTagName("script")[0];
t.parentNode.insertBefore(s, t);