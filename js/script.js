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

function submitFormFunc() {
    console.log( "HUHUH" );
    var name = document.getElementById( "name" );
    var email = document.getElementById( "email" );

    const Url = "https://konnect-js.herokuapp.com/konnectsnd";

    const dataObject = {
        "uid": "DfDMxNhG9nbgvclOh4YxjQ9NX9H2",
        "name": name.value,
        "email": email.value
    };

    var data = fetch( Url, {
        method: "POST",
        form: dataObject
    } ).then( response => {

        console.log( "IT RANNN" );
        console.log( response.text() );

    } ).then( html => {
        console.log( html )
    } );

    console.log( data );
}
