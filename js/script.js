$( document ).ready( function () {
    $( window ).scroll( function () {
        if ( this.scrollY > 20 ) 
            $( ".navbar" ).addClass( "sticky" );
         else 
            $( ".navbar" ).removeClass( "sticky" );
        


    } );

    $( window ).scroll( function () {
        if ( this.scrollY > 1200 ) 
            $( ".skill-card__skillbar--percentage--level-1" ).addClass( "anim-skill-1" );
         else 
            $( ".skill-card__skillbar--percentage--level-1" ).removeClass( "anim-skill-1" );
        


    } );

    $( window ).scroll( function () {
        if ( this.scrollY > 1200 ) 
            $( ".skill-card__skillbar--percentage--level-2" ).addClass( "anim-skill-2" );
         else 
            $( ".skill-card__skillbar--percentage--level-2" ).removeClass( "anim-skill-2" );
        


    } );

    $( window ).scroll( function () {
        if ( this.scrollY > 1200 ) 
            $( ".skill-card__skillbar--percentage--level-3" ).addClass( "anim-skill-3" );
         else 
            $( ".skill-card__skillbar--percentage--level-3" ).removeClass( "anim-skill-3" );
        


    } );

    $( ".navbar__inner--menu-toggler" ).click( function () {
        $( this ).toggleClass( "active" );
        $( ".navbar__inner--menu" ).toggleClass( "active" );
    } );
} );

async function submitFormFunc() {

    var name = document.getElementById( "name" );
    var email = document.getElementById( "email" );

    const Url = "https://konnect-js.herokuapp.com/konnectsnd";

    const dataObject = {
        "uid": "DfDMxNhG9nbgvclOh4YxjQ9NX9H2",
        "name": name.value,
        "email": email.value
    };

    var myHeaders = new Headers();
    myHeaders.append( "Content-Type", "application/json" );

    var raw = JSON.stringify( dataObject );

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch( Url, requestOptions ).then( response => {
        response.text();
        window.alert( "Thanks For Contacting Me :)" )
    } ).then( result => console.log( result ) ).catch( error => console.log( 'error', error ) );

}
