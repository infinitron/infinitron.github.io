<template>
    <v-overlay absolute opacity=".5">
        <v-card class="overflow-y-auto" max-width="1000" max-height="1000" dark>
            <v-card-title>About Me</v-card-title>
            <v-img contain :src="require('../../assets/me_photographer.jpg')" />
            <v-card-text class="text-lg-body-1">
                <p> Born and brought up in Hyderabad, India--so I naturally love cooking and eating <a
                        href="https://en.wikipedia.org/wiki/Hyderabadi_biryani">Biryani</a>. I&#39;m married to the love
                    of my life, Ashwini (which used to be the head's name of the <a
                        href="https://en.wikipedia.org/wiki/Ashvini">Aries</a> constellation in ancient astronomy).
                    She&#39;s an expert in cybersecurity and mostly operates in stealth mode on the internet. I enjoy
                    many activities beyond astrophysics and saving the world. Running, I&#39;m training for a
                    full marathon. I completed my 5k and 10k a while ago and I&#39;m looking forward to my first
                    half-marathon. I&#39;m a great resource for linux-based operating systems. I constantly try out new
                    realeases for fun, and please don&#39;t hesitate to contact me if you&#39;re looking to optimize
                    your workflow--I&#39;m known to give good suggestions on this side and daily use tech in general
                    from time to time. Death Metal music is an inextricable part of me. <a
                        href="https://en.wikipedia.org/wiki/Demonic_Resurrection">DR</a>, <a
                        href="https://toolband.com/">Tool</a>, <a href="https://www.mastodonrocks.com/">Mastodon</a>, <a
                        href="https://www.metallica.com/">Metallica</a> to name a few. I like to hike and take pictures of random things wherever I go. I enjoy playing Call of Duty and
                    Dota 2 (steam id: scisyhporsta). Besides internet games, I love biking, badminton and cricket.
                    Unconventionally, I like to field more than batting or bowling in cricket, although my throws to
                    either ends of the wicket are usually as useful as the letter p in raspberry.</p>
            </v-card-text>

            <!-- 
                Do you ever wonder why there is a universe at all or how mysterious phenomena in its grand scheme
                    keep
                    popping up eternally as if the universe was a magical crystal ball? What if we had the key to this
                    crystal
                    ball that allowed us to peer into the clockwork of this universe at any scale? Fun, right?</p>
                <p>I get it.</p>
                <p>Fortunately, I also get to think about it for work.
                I&#39;m Karthik, also
                    known
                    as
                    Batman in some cultures. I received my Ph.D. in Astrophysics from the University of
                    Maryland-Baltimore
                    County (Advisors: <a href="https://physics.umbc.edu/people/faculty/georganopoulos/">Dr. Markos
                        Georganopoulos</a> and <a href="https://physics.umbc.edu/people/faculty/meyer/">Dr. Eileen
                        Meyer</a>). I
                    will soon be joining the School of Earth and Space Exploration at Arizona State University as a
                    postdoc
                    where I will work on operationalizing a radio telescope to observe Fast radio Bursts.</p>

                <p>During My Ph.D., I applied astrostatistical techniques to study the X-ray/Radio structural
                    differences in
                    extragalactic X-ray jets to understand how their powerful kind produce X-rays hundreds of kpc away
                    from
                    the
                    central black hole. I was a Remote Sensing scientist at the National Remote Sensing Centre,
                    Hyderabad,
                    India
                    prior to starting my Ph.D.</p> -->
        </v-card>
    </v-overlay>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style>
.bkg-blur1 {
    /* background-color: rgba(0, 0, 0, 0.1) !important; */
    backdrop-filter: blur(1px);
    /* position: absolute; */
    color: white;
    padding: 5px;
    font-size: 1.2em;
    text-align: left !important;
    top: 1% !important;
}

.fs {
    font-size: 2em;
}
</style>