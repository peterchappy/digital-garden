### Does Pi-Hole slow down internet speeds?

Pi-Hole only sees the DNS requests, not the actual traffic that goes between your client and the requested domain. Since DNS traffic is very low bandwidth (a few hundred bytes per request), a 3B+ will be able to handle them easily, on either the wired or wireless interface.

Once the client has received the IP for the requested domain, all of that traffic flows between the client and your router to the internet, and none of it goes through the Pi-Hole/Pi. This is why Pi-Hole works well for many users on a Zero W running wirelessly on 2.4 GHz.

As a previous reply noted, this typically makes your internet experience faster, as less content is being loaded with some of the domains being blocked. However, at your speed you will likely not notice the difference. You will notice that browser pages will load more quickly, because the browser has to process and format less information with the ads stripped out.

[source](https://discourse.pi-hole.net/t/will-pi-hole-slow-down-my-speeds/16487)

Links
- [Pi-Hole setup Guide](https://learn.adafruit.com/pi-hole-ad-blocker-with-pi-zero-w?view=all#install-pi-hole)