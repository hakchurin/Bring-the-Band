

## BRING THE BAND

## ABOUT
 A local music venue has asked you to build a promotional app: Bring The Band! Bring the band will allow users to vote for musicians they want to see at the venue. The venue also hopes to gain a following and boost their patron engagement by tracking popular bands and trends.


## LIVE SITE 
http://bring-the-band.surge.sh/


## BUILD TOOLS WITH NPM SCRIPT
JavaScript
React.js
es2015
Backbone.js
underscore.js
SCSS (Sass)
jQuery (ajax calls)


##APIs
Spotify
Kinvey



##FEATURES
Searching --
Search field queries Spotify's API for bands/artists
Results of the Spotify search are displayed as a list of bands.

Voting --
If user votes on band, the vote is toggled.
Voted page (results) are ordered from greatest amount of votes to least.
Keeping track of votes in a separate collection on kinvey ( use a 'join table' ).

Login/signup functionality --
User is able to login and access voting features
Users can sign up, and are registered on the backend, via Kinvey
Anonymous login
Automatically log in new users with an 'annonymous' account when they arrive at the site, allowing you to keep track of their behavior and let them view votes, but NOT allowing them to vote until they officially sign up.
