
/*
I8,        8        ,8I           db           88888888ba     888b      88    88    888b      88      ,ad8888ba,     88  
`8b       d8b       d8'          d88b          88      "8b    8888b     88    88    8888b     88     d8"'    `"8b    88  
 "8,     ,8"8,     ,8"          d8'`8b         88      ,8P    88 `8b    88    88    88 `8b    88    d8'              88  
  Y8     8P Y8     8P          d8'  `8b        88aaaaaa8P'    88  `8b   88    88    88  `8b   88    88               88  
  `8b   d8' `8b   d8'         d8YaaaaY8b       88""""88'      88   `8b  88    88    88   `8b  88    88      88888    88  
   `8a a8'   `8a a8'         d8""""""""8b      88    `8b      88    `8b 88    88    88    `8b 88    Y8,        88    ""  
    `8a8'     `8a8'         d8'        `8b     88     `8b     88     `8888    88    88     `8888     Y8a.    .a88    aa  
     `8'       `8'         d8'          `8b    88      `8b    88      `888    88    88      `888      `"Y88888P"     88  









                                                                                                        
88888888ba,             db           888b      88      ,ad8888ba,     88888888888    88888888ba     88  
88      `"8b           d88b          8888b     88     d8"'    `"8b    88             88      "8b    88  
88        `8b         d8'`8b         88 `8b    88    d8'              88             88      ,8P    88  
88         88        d8'  `8b        88  `8b   88    88               88aaaaa        88aaaaaa8P'    88  
88         88       d8YaaaaY8b       88   `8b  88    88      88888    88"""""        88""""88'      88  
88         8P      d8""""""""8b      88    `8b 88    Y8,        88    88             88    `8b      ""  
88      .a8P      d8'        `8b     88     `8888     Y8a.    .a88    88             88     `8b     aa  
88888888Y"'      d8'          `8b    88      `888      `"Y88888P"     88888888888    88      `8b    88  





    Got your attention? Good. Please read the following carefully.
    
    You are currently editing the bibliographical database for ReSpec version 1.
    
    The version of ReSpec, as of this writing, is 3.1. That should raise a red flag.
    
    The code behind ReSpec v1 is no longer supported. It is still in this repository, and
    the plan is that it will stay there. You can use it, and you can patch it. But it 
    isn't officially supported, so you have to understand that you're essentially on your 
    own.
    
    For the time being, at regular intervals I take the edits that people make in this 
    file, and push them to the new version (note that I don't do the reverse though, so
    you're not getting the collectively-gathered bibliographical updates that others 
    are). As of TPAC 2012, I will stop doing even just that, and the v1 codeline will be
    entirely extinct. You can keep on using it anyway, so long as you are aware of the 
    consquences.
    
    Why would you switch to v3? Well, unless you've been doing something really naughty,
    it's completely backwards compatible. It's 5x smaller (and that's going to improve 
    even more soon) and makes 10x fewer HTTP requests to load. Dozens of bugs have been 
    fixed since maintenance stopped on the v1 line, and a number of features have been 
    added. People have spontaneously written in to say how much faster it is. The code is
    modular, can easily be extended, and ReSpec can now be used to process other types of
    technical documents just by rearranging the modules differently. It's test suite 
    and new development cycle should also help ensure that it doesn't break live.
    
    Wow, that's increadibly sexy! How do I upgrade?
    You replace:
        <script src='http://dev.w3.org/2009/dap/ReSpec.js/js/respec.js' class='remove'></script>
    with:
        <script src='http://www.w3.org/Tools/respec/respec-w3c-common' class='remove' async></script>

    And normally you should be done. If you see issues: robin@berjon.com.

    I still want to contribute to the biblio DB, what do I do?
    Until TPAC 2012, if you're still using v1 you can just edit here and at some point I 
    will reflect the change in the v3 DB.
    If you've switched to v3, you can edit the DB by forking the repository at
    https://github.com/darobin/respec/ and making a pull request (that can entirely be
    done online if you're in a hurry).
    Managing the DB in this way is not wonderful, it is only kept around for now while
    in the transition period (which is to say, until TPAC 2012). After that, there will
    just be a Web-based system that will progressively become easier to use.


    Brought to you with care and loving from Robin Berjon <robin@berjon.com>

*/

berjon.biblio = {
// OIPF
	"OIPF_SERV2" : "Open IPTV Forum, \"Services and Functions for Release 2\", V1.0, October 2008.",
	"OIPF_REQS2" : "Open IPTV Forum, \"Service and Platform Requirements\", V2.0, December 2008.",
	"OIPF_ARCH2" : "Open IPTV Forum, \"<a href=architecture.html>Functional Architecture</a> - V2.3\", January 2014.",
	"OIPFR1-1ERR1" : "Open IPTV Forum, \"Release 1 IPTV Solution Version 1.1 Errata 1\", July 2010.",
	"OIPFR1-1ERR2" : "Open IPTV Forum, \"Release 1 IPTV Solution Version 1.1 Errata 2\", March 2011.",
	"OIPFR2-0ERR1" : "Open IPTV Forum, \"Release 2 IPTV Solution Version 2.0 Errata 1\", October 2010.",

	"OIPF_OVIEW2":   "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume1.html\">Volume 1</a> - Overview\", V2.3, January 2014.",
	"OIPF_MEDIA2":   "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume2.html\">Volume 2</a> - Media Formats\", V2.3, January 2014.",
	"OIPF_HAS2":     "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume2a.html\">Volume 2a</a> - HTTP Adaptive Streaming\", V2.3, January 2014.",
	"OIPF_META2":    "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume3.html\">Volume 3</a> - Content Metadata\", V2.3, January 2014.",
	"OIPF_PROT2":    "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume4.html\">Volume 4</a> - Protocols\", V2.3, January 2014.",
	"OIPF_PROT_EX2": "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume4a.html\">Volume 4a</a> - Examples of IPTV Protocol Sequences\", V2.3, January 2014.",
	"OIPF_DAE2":     "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume5.html\">Volume 5</a> - Declarative Application Environment\", V2.3, January 2014.",
	"OIPF_WSTVP2":   "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume5a.html\">Volume 5a</a> - Web Standards TV Profile\", V2.3, January 2014.",
	"OIPF_PAE2":     "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume6.html\">Volume 6</a> - Procedural Application Environment\", V2.3, January 2014.",
	"OIPF_CSP2" :    "Open IPTV Forum, \"Release 2 Specification, <a href=\"volume7.html\">Volume 7</a> - Authentication, Content Protection and Service Protection\", V2.3, January 2014.",

//ETSI
	"DVBSI": "ETSI, EN 300 468 V1.13.1 (2012-08), \"Digital Video Broadcasting (DVB); Specification for Service Information (SI) in DVB systems\".",
	"DVBTTXT":"ETSI, EN 300 472 V1.3.1 (2003-05), \"Digital Video Broadcasting (DVB); Specification for conveying ITU-R System B Teletext in DVB bitstreams\".",

	"TS101154": "ETSI, TS 101 154 V1.11.1 (2012-11), \"Digital Video Broadcasting (DVB); Specification for the use of Video and Audio Coding in Broadcasting Applications based on the MPEG-2 Transport Stream\".<br>Also available as DVB Bluebook A157 (06/2012)",
	"DVB3D" : "ETSI, TS 101 547 V1.1.1, \"DVB Frame Compatible Plano-Stereoscopic 3DTV\"",
	"TS102034" : "ETSI, TS 102 034 V1.4.1 (2007-10), \"Digital Video Broadcasting (DVB); Transport of MPEG-2 TS Based DVB Services over IP Networks\".",
	"AC3": "ETSI, TS 102 366 V1.2.1 (2008-08), \"Digital Audio Compression (AC-3, Enhanced AC-3) Standard\".",
	
	"BCG":"ETSI, TS 102 539 V1.3.1 (2010-04), \"Digital Video Broadcasting: Carriage of Broadband Content Guide (BCG) information over Internet Protocol\"",
	"TS102539":"ETSI, TS 102 539 V1.3.1 (2010-04), \"Digital Video Broadcasting: Carriage of Broadband Content Guide (BCG) information over Internet Protocol\"",
	
	"GEM" : "ETSI, TS 102 728 V1.2.1 (2011-09), \"Digital Video Broadcasting (DVB); Globally Executable MHP (GEM) Specification 1.3 (including OTT and hybrid broadcast/broadband)\" ",
	"TS102809" : "ETSI, TS 102 809 V1.1.1 (2010-01), \"Digital Video Broadcasting (DVB); Signalling and carriage of interactive applications and services in hybrid broadcast / broadband environments\".",
	"TS126114":"ETSI, TS 126 114 V10.0.0 (2011-04), \"IMS Multimedia Telephony; media handling and interaction\".",
	"TS181005":"ETSI, TS 181 005 V3.3.1 (2009-12), \"TISPAN Service and Capability Requirements\".",
	

//ISO
	"MPEG1":"ISO/IEC, 11172 3:1993/Cor 1:1996, \"Information Technology - Coding of moving pictures and associated audio for digital storage media at up to about 1.5 Mbit/s - Part 3: Audio\".",
	"MPEG2TS":"ISO/IEC, 13818-1:2000/Amd.3:2004, \"Generic coding of moving pictures and associated audio information: Systems\".",
	"MP4V":"ISO/IEC, 14496-2:2004, \"Information technology - Coding of audio-visual objects - Part 2: Visual\".",
	"AAC" : "ISO/IEC, 14496-3:2009, \"Information Technology - Coding of audio-visual objects - Part 3: Audio\".",
	"ISOFF":"ISO/IEC, 14496-12:2012, \"Information Technology - Coding of Audio-Visual Objects - Part 12: ISO Base Media file format\", International Standards Organization.",
	"MP4FF":"ISO/IEC, 14496-14:2003, \"Information Technology - Coding of Audio-Visual Objects - Part 14: MP4 file format\", International Standards Organization.",
	"AVCFF" : "ISO/IEC, 14496-15:2004, \"Information Technology - Coding of Audio-Visual Objects - Part 15: Advanced Video Coding (AVC) file format\", International Standards Organization.",
	"PNG" : "ISO/IEC, 15948:2004, \"Information technology - Computer graphics and image processing - Portable Network Graphics (PNG): Functional specification\".",
	"CENC" : "ISO/IEC, FDIS 23001-7:2011, \"Information technology - MPEG systems technologies - Part 7: Common encryption in ISO base media file format files\"",
	"MPS":"ISO/IEC, 23003-1:2007, \"Information Technology - MPEG audio technologies - Part 1: MPEG Surround\", including ISO/IEC 23003-1:2007/Cor:2008, \"Information Technology - MPEG audio technologies - Part 1: MPEG Surround, TECHNICAL CORRIGENDUM 1\".",
	"SPDIF":"ISO/IEC, 60958-3:2006, Digital audio interface – part 3: Consumer applications.",
		
//CEA
	"CEA-2014-A": "Consumer Electronics Association, CEA-2014-A, \"Web-based Protocol Framework for Remote User Interface on UPnP Networks and the Internet (Web4CE)\", (including the August 2008 Errata)",
	"CEACC": "Consumer Electronics Association, CEA-708-C (2006), \"Digital Television (DTV) Closed Captioning\".",

//Marlin Developer Community
	"MRL-BBTS":"Marlin Developer Community, \"Marlin Broadband Transport Stream Specification\", Version 1.0, July 2008.",
	"MRL-DMZ":"Marlin Developer Community, \"Marlin Dynamic Media Zones\", Version 1.1",
	"MRL-FF":"Marlin Developer Community, \"Marlin - File Formats Specification\", Version 1.1, July 2008, and latest version of \"Marlin Errata: Marlin - File Formats Specification V1.1\".",
	"OMARLIN":"Marlin Developer Community, \"OMArlin Specification\", Version 1.0.1, July 2008.",
	
//ITU	
	"G711":"ITU-T, Recommendation G.711, \"Pulse code modulation (PCM) of voice frequencies\".",
	"G719":"ITU-T, Recommendation G.719, \"Low-complexity, full-band audio coding for high-quality, conversational applications\".",
	"G722":"ITU-T, Recommendation G.722, \"7 kHz Audio Coding within 64 Kbit/s\".",
	"G729":"ITU-T, Recommendation G.729, \"Coding of speech at 8 kbit/s using conjugate-structure algebraic-code-excited linear prediction (CS-ACELP)\".",
	"G729-1":"ITU-T, Recommendation G.729.1, \"G.729 based Embedded Variable bit-rate coder: An 8-32 Kbit/s scalable wideband coder bitstream interoperable with G.729\".",
	"T81":"ITU-T, Recommendation T.81 (09/92), \"Information Technology - Digital Compression and Coding of Continuous-tone Still Images: Requirements and guidelines\".",
	"H262":"ITU T, Recommendation H.262 / ISO/IEC 13818 2: \"Information Technology – Generic Coding of moving pictures and associated audio information: Video\".",
	"H263":"ITU-T, Recommendation H.263 (2005), \"Video coding for low bitrate communication\".",
	"H264":"ITU T, Recommendation H.264 / ISO/IEC 14496-10:2005: \"Information technology - Coding of audio visual objects   Part 10: Advanced Video Coding\".",

//3GPP
	"3GPPAMR":"3GPP, TS 26.071, \"Mandatory speech CODEC speech processing functions; AMR speech Codec; General description\".<br>3GPP TS 26.090, \"Mandatory Speech Codec speech processing functions; Adaptive Multi-Rate (AMR) speech codec; Transcoding functions\".",
	"3GPPAMRWB":"3GPP, TS 26.171: \"Speech codec speech processing functions; Adaptive Multi-Rate - Wideband (AMR WB) speech codec; General description\".<br>3GPP, TS 26.190, \"Speech codec speech processing functions; Adaptive Multi-Rate - Wideband (AMR WB) speech codec; Transcoding functions\".",
	"3GPPTS26234":"3GPP, TS 26.234, \"Transparent end-to-end Packet-switched; Streaming Service (PSS); Protocols and codecs (Release 9)\".",
	"TS26234":"3GPP, TS 26.234 V9.3.0 (2010-06), Transparent end-to-end Packet-switched Streaming Service (PSS) Protocols and codecs (Release 9)",
	"3GPPTS26245":"3GPP, TS 26.245, \"Transparent end-to-end Packet switched Streaming Service (PSS); Timed text format\".",
	"3GPPAMRWB+":"3GPP, TS 26.290, \"Audio codec processing functions; Extended Adaptive Multi-Rate - Wideband (AMR WB+) codec; Transcoding functions\".",
	"3GPPEAAC+":"3GPP, TS 26.401, \"General audio codec audio processing functions; Enhanced aacPlus general audio codec; General description\".",
	
//Broadband Forum
	"TR069":"Broadband Forum, TR-069 Amendment 2, \"CPE WAN Management Protocol v1.1\" URL: <a href=\"http://www.broadband-forum.org/technical/download/TR-069_Amendment-2.pdf\" class=\"reference-link\">http://www.broadband-forum.org/technical/download/TR-069_Amendment-2.pdf</a>",
	"TR098":"Broadband Forum, TR-098, \"Internet Gateway Device Data Model for TR-069\" URL: <a href=\"http://www.broadband-forum.org/technical/download/TR-098_Amendment-2.pdf\" class=\"reference-link\">http://www.broadband-forum.org/technical/download/TR-098_Amendment-2.pdf</a>",
	"TR104":"Broadband Forum, TR-104, \"DSLHome&#153; Provisioning Parameters for VoIP CPE\" URL: <a href=\"http://www.broadband-forum.org/technical/download/TR-104.pdf\" class=\"reference-link\"http://www.broadband-forum.org/technical/download/TR-104.pdf</a>",
	"TR106":"Broadband Forum, TR-106, \"Data Model Template for TR-069 Enabled Devices\" URL: <a href=\"http://www.broadband-forum.org/technical/download/TR-106_Amendment-7.pdf\" class=\"reference-link\">http://www.broadband-forum.org/technical/download/TR-106_Amendment-7.pdf</a>",
	"TR135":"Broadband Forum, TR-135, \"Data Model for a TR-069 Enabled STB\" URL: <a href=\"http://www.broadband-forum.org/technical/download/TR-135_Amendment-3.pdf\" class=\"reference-link\">http://www.broadband-forum.org/technical/download/TR-135_Amendment-3.pdf</a>",

//IETF	
	"RFC1321":"IETF, RFC 1321, \"The MD5 Message-Digest Algorithm\" URL: <a href=\"http://tools.ietf.org/html/rfc1321\" class=\"reference-link\">http://tools.ietf.org/html/rfc1321</a>",
	
	"RFC1918":"IETF, RFC 1918, \"Address Allocation for Private Internets\" URL: <a href=\"http://tools.ietf.org/html/rfc1918\" class=\"reference-link\">http://tools.ietf.org/html/rfc1918</a>",
	"ADDR":"IETF, RFC 1918, \"Address Allocation for Private Internets\" URL: <a href=\"http://tools.ietf.org/html/rfc1918\" class=\"reference-link\">http://tools.ietf.org/html/rfc1918</a>",
	
	"RFC2045":"IETF, RFC 2045, \"Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies\" URL: <a href=\"http://tools.ietf.org/html/rfc2045\" class=\"reference-link\">http://tools.ietf.org/html/rfc2045</a>",
	"RFC2109":"IETF, RFC 2109, \"HTTP State Management Mechanism\" URL: <a href=\"http://tools.ietf.org/html/rfc2109\" class=\"reference-link\">http://tools.ietf.org/html/rfc2109</a>",
	"RFC2119" : "S. Bradner. <a href=\"http://www.ietf.org/rfc/rfc2119.txt\"><cite>Key words for use in RFCs to Indicate Requirement Levels.</cite></a> March 1997. Internet RFC 2119.  URL: <a href=\"http://www.ietf.org/rfc/rfc2119.txt\" class=\"reference-link\">http://www.ietf.org/rfc/rfc2119.txt</a> ",
	
	"RFC2132":"IETF, RFC 2132, \"DHCP Options and BOOTP Vendor Extensions\" URL: <a href=\"http://tools.ietf.org/html/rfc2132\" class=\"reference-link\">http://tools.ietf.org/html/rfc2132</a>",
	"DHCP-OPT":"IETF, RFC 2132, \"DHCP Options and BOOTP Vendor Extensions\" URL: <a href=\"http://tools.ietf.org/html/rfc2132\" class=\"reference-link\">http://tools.ietf.org/html/rfc2132</a>",
		
	"RFC2246":"IETF, RFC 2246  \"The Transport Layer Security (TLS) Protocol Version 1.0\" URL: <a href=\"http://tools.ietf.org/html/rfc2246\" class=\"reference-link\">http://tools.ietf.org/html/rfc2246</a>",
	
	// as of 2015-06-18, no section references points exist
	"RFC2326":"IETF, RFC 2326, \"Real Time Streaming Protocol (RTSP)\" URL: <a href=\"http://tools.ietf.org/html/rfc2326\" class=\"reference-link\">http://tools.ietf.org/html/rfc2326</a>",
	"RTSP":"IETF, RFC 2326, \"Real Time Streaming Protocol (RTSP)\" URL: <a href=\"http://tools.ietf.org/html/rfc2326\" class=\"reference-link\">http://tools.ietf.org/html/rfc2326</a>",

	"RFC2560":"IETF, RFC 2560 \"X.509 Internet Public Key Infrastructure Online Certificate Status Protocol - OCSP\" URL: <a href=\"http://tools.ietf.org/html/rfc2560\" class=\"reference-link\">http://tools.ietf.org/html/rfc2560</a>",
	"OCSP":"IETF, RFC 2560 \"X.509 Internet Public Key Infrastructure Online Certificate Status Protocol - OCSP\" URL: <a href=\"http://tools.ietf.org/html/rfc2560\" class=\"reference-link\">http://tools.ietf.org/html/rfc2560</a>",

	"RFC2616":"IETF, RFC 2616, \"Hypertext Transfer Protocol -- HTTP/1.1\" URL: <a href=\"http://tools.ietf.org/html/rfc2616\" class=\"reference-link\">http://tools.ietf.org/html/rfc2616</a>",
	"HTTP":"IETF, RFC 2616, \"Hypertext Transfer Protocol -- HTTP/1.1\" URL: <a href=\"http://tools.ietf.org/html/rfc2616\" class=\"reference-link\">http://tools.ietf.org/html/rfc2616</a>",

	"RFC2617":"IETF, RFC 2617, \"HTTP Authentication: Basic and Digest Access Authentication\" URL: <a href=\"http://tools.ietf.org/html/rfc2617\" class=\"reference-link\">http://tools.ietf.org/html/rfc2617</a>",
	"HTTPAUTH":"IETF, RFC 2617, \"HTTP Authentication: Basic and Digest Access Authentication\" URL: <a href=\"http://tools.ietf.org/html/rfc2617\" class=\"reference-link\">http://tools.ietf.org/html/rfc2617</a>",
	
	"RFC2630":"IETF, RFC 2630 \"Cryptographic Message Syntax\" URL: <a href=\"http://tools.ietf.org/html/rfc2630\" class=\"reference-link\">http://tools.ietf.org/html/rfc2630</a>",
	"RFC2818":"IETF, RFC 2818, \"HTTP over TLS\" URL: <a href=\"http://tools.ietf.org/html/rfc2818\" class=\"reference-link\">http://tools.ietf.org/html/rfc2818</a>",
	"RFC2837":"IETF, RFC 2387, \"The MIME Multipart/Related Content-type\" URL: <a href=\"http://tools.ietf.org/html/rfc2637\" class=\"reference-link\">http://tools.ietf.org/html/rfc2637</a>",
	"RFC3016":"IETF, RFC 3016, \"RTP Payload Format for MPEG-4 Audio/Visual Streams\" URL: <a href=\"http://tools.ietf.org/html/rfc3016\" class=\"reference-link\">http://tools.ietf.org/html/rfc3016</a>",
	
	"RFC3261":"IETF, RFC 3261, \"SIP: Session Initiation Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc3261\" class=\"reference-link\">http://tools.ietf.org/html/rfc3261</a>",
	"SIP":"IETF, RFC 3261, \"SIP: Session Initiation Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc3261\" class=\"reference-link\">http://tools.ietf.org/html/rfc3261</a>",
	
	"RFC3264":"IETF, RFC 3264, \"An Offer/Answer Model with the Session Description Protocol (SDP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3264\" class=\"reference-link\">http://tools.ietf.org/html/rfc3264</a>",	
	"OFRANSR":"IETF, RFC 3264, \"An Offer/Answer Model with the Session Description Protocol (SDP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3264\" class=\"reference-link\">http://tools.ietf.org/html/rfc3264</a>",	
	
	"RFC3265":"IETF, RFC 3265, \"Session Initiation Protocol (SIP)-Specific Event Notification\" URL: <a href=\"http://tools.ietf.org/html/rfc3265\" class=\"reference-link\">http://tools.ietf.org/html/rfc3265</a>",
	"SIP-EVNT":"IETF, RFC 3265, \"Session Initiation Protocol (SIP)-Specific Event Notification\" URL: <a href=\"http://tools.ietf.org/html/rfc3265\" class=\"reference-link\">http://tools.ietf.org/html/rfc3265</a>",
	
	"RFC3376":"IETF, RFC 3376, \"Internet Group Management Protocol, Version 3\" URL: <a href=\"http://tools.ietf.org/html/rfc3376\" class=\"reference-link\">http://tools.ietf.org/html/rfc3376</a>",
	"IGMP3":"IETF, RFC 3376, \"Internet Group Management Protocol, Version 3\" URL: <a href=\"http://tools.ietf.org/html/rfc3376\" class=\"reference-link\">http://tools.ietf.org/html/rfc3376</a>",
	
	"RFC3420":"IETF, RFC 3420, \"Internet Media Type message/sipfrag\" URL: <a href=\"http://tools.ietf.org/html/rfc3420\" class=\"reference-link\">http://tools.ietf.org/html/rfc3420</a>",
	
	"RFC3428":"IETF, RFC 3428, \"Session Initiation Protocol (SIP) Extension for Instant Messaging\" URL: <a href=\"http://tools.ietf.org/html/rfc3428\" class=\"reference-link\">http://tools.ietf.org/html/rfc3428</a>",
	"SIP-IM":"IETF, RFC 3428, \"Session Initiation Protocol (SIP) Extension for Instant Messaging\" URL: <a href=\"http://tools.ietf.org/html/rfc3428\" class=\"reference-link\">http://tools.ietf.org/html/rfc3428</a>",
	
	"RFC3442":"IETF, RFC 3442, \"The Classless Static Route Option for Dynamic Host Configuration Protocol (DHCP) version 4\" URL: <a href=\"http://tools.ietf.org/html/rfc3442\" class=\"reference-link\">http://tools.ietf.org/html/rfc3442</a>",
	"CLSLESS":"IETF, RFC 3442, \"The Classless Static Route Option for Dynamic Host Configuration Protocol (DHCP) version 4\" URL: <a href=\"http://tools.ietf.org/html/rfc3442\" class=\"reference-link\">http://tools.ietf.org/html/rfc3442</a>",
	
	"RFC3455":"IETF, RFC 3455, \"Private Header (P-Header) Extensions to the Session Initiation. Protocol (SIP) for the 3rd Generation Partnership Project (3GPP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3455\" class=\"reference-link\">http://tools.ietf.org/html/rfc3455</a>",	
	"RFC3515":"IETF, RFC 3515, \"The Session Initiation Protocol (SIP) REFER Method\" URL: <a href=\"http://tools.ietf.org/html/rfc3515\" class=\"reference-link\">http://tools.ietf.org/html/rfc3515</a>",

	"RFC3550":"IETF, RFC 3550, \"RTP: A Transport Protocol for Real-Time Applications\" URL: <a href=\"http://tools.ietf.org/html/rfc3550\" class=\"reference-link\">http://tools.ietf.org/html/rfc3550</a>",
	"RTP":"IETF, RFC 3550, \"RTP: A Transport Protocol for Real-Time Applications\" URL: <a href=\"http://tools.ietf.org/html/rfc3550\" class=\"reference-link\">http://tools.ietf.org/html/rfc3550</a>",

	"RFC3551":"IETF, RFC 3551, \"RTP Profile for Audio and Video Conferences with Minimal Control\" URL: <a href=\"http://tools.ietf.org/html/rfc3551\" class=\"reference-link\">http://tools.ietf.org/html/rfc3551</a>",
	
	"RFC3556":"IETF, RFC 3556, \"Session Description Protocol (SDP) Bandwidth Modifiers for RTP Control Protocol (RTCP) Bandwidth\" URL: <a href=\"http://tools.ietf.org/html/rfc3556\" class=\"reference-link\">http://tools.ietf.org/html/rfc3556</a>",
	"SDP-RTCP":"IETF, RFC 3556, \"Session Description Protocol (SDP) Bandwidth Modifiers for RTP Control Protocol (RTCP) Bandwidth\" URL: <a href=\"http://tools.ietf.org/html/rfc3556\" class=\"reference-link\">http://tools.ietf.org/html/rfc3556</a>",
	
	"RFC3588":"IETF, RFC 3588, \"Diameter Base Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc3588\" class=\"reference-link\">http://tools.ietf.org/html/rfc3588</a>",
	
	"RFC3611":"IETF, RFC 3611, \"RTP Control Protocol Extended Reports (RTCP XR)\" URL: <a href=\"http://tools.ietf.org/html/rfc3611\" class=\"reference-link\">http://tools.ietf.org/html/rfc3611</a>",
	"RTCP-XR":"IETF, RFC 3611, \"RTP Control Protocol Extended Reports (RTCP XR)\" URL: <a href=\"http://tools.ietf.org/html/rfc3611\" class=\"reference-link\">http://tools.ietf.org/html/rfc3611</a>",
	
	"RFC3640":"IETF, RFC 3640, \"RTP Payload Format for Transport of MPEG-4 Elementary Streams\" URL: <a href=\"http://tools.ietf.org/html/rfc3640\" class=\"reference-link\">http://tools.ietf.org/html/rfc3640</a>",
	
	"RFC3680":"IETF, RFC 3680, \"A Session Initiation Protocol (SIP) Event Package for Registrations\" URL: <a href=\"http://tools.ietf.org/html/rfc3680\" class=\"reference-link\">http://tools.ietf.org/html/rfc3680</a>",
	"SIP-REG":"IETF, RFC 3680, \"A Session Initiation Protocol (SIP) Event Package for Registrations\" URL: <a href=\"http://tools.ietf.org/html/rfc3680\" class=\"reference-link\">http://tools.ietf.org/html/rfc3680</a>",
	
	"RFC3840":"IETF, RFC 3840, \"Indicating User Agent Capabilities in the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3841\" class=\"reference-link\">http://tools.ietf.org/html/rfc3841</a>",
	"RFC3841":"IETF, RFC 3841, \"Caller Preferences for the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3841\" class=\"reference-link\">http://tools.ietf.org/html/rfc3841</a>",
	
	"RFC3856":"IETF, RFC 3856, \"A Presence Event Package for the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3856\" class=\"reference-link\">http://tools.ietf.org/html/rfc3856</a>",
	"SIP-PRES":"IETF, RFC 3856, \"A Presence Event Package for the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc3856\" class=\"reference-link\">http://tools.ietf.org/html/rfc3856</a>",
	
	"RFC3890":"IETF, RFC 3890, \"A Transport Independent Bandwidth Modifier for the Session Description Protocol (SDP)\ URL: <a href=\"http://tools.ietf.org/html/rfc3890\" class=\"reference-link\">http://tools.ietf.org/html/rfc3890</a>",
	"RFC3891":"IETF, RFC 3891, \"The Session Initiation Protocol (SIP) \"Replaces\" Header\" URL: <a href=\"http://tools.ietf.org/html/rfc3891\" class=\"reference-link\">http://tools.ietf.org/html/rfc3891</a>",
	"RFC3903":"IETF, RFC 3903, \"Session Initiation Protocol (SIP) Extension for Event State Publication\" URL: <a href=\"http://tools.ietf.org/html/rfc3903\" class=\"reference-link\">http://tools.ietf.org/html/rfc3903</a>",
	
	"RFC3925":"IETF, RFC 3925, \"Vendor-Identifying Vendor Options for Dynamic Host Configuration Protocol version 4 (DHCPv4)\" URL: <a href=\"http://tools.ietf.org/html/rfc3925\" class=\"reference-link\">http://tools.ietf.org/html/rfc3925</a>",
	"DHCP-VND":"IETF, RFC 3925, \"Vendor-Identifying Vendor Options for Dynamic Host Configuration Protocol version 4 (DHCPv4)\" URL: <a href=\"http://tools.ietf.org/html/rfc3925\" class=\"reference-link\">http://tools.ietf.org/html/rfc3925</a>",
	
	"RFC3926":"IETF, RFC 3926, \"FLUTE - File Delivery over Unidirectional Transport\" URL: <a href=\"http://tools.ietf.org/html/rfc3926\" class=\"reference-link\">http://tools.ietf.org/html/rfc3926</a>",
	"FLUTE":"IETF, RFC 3926, \"FLUTE - File Delivery over Unidirectional Transport\" URL: <a href=\"http://tools.ietf.org/html/rfc3926\" class=\"reference-link\">http://tools.ietf.org/html/rfc3926</a>",
	
	"RFC3984":"IETF, RFC 3984, \"RTP Payload Format for H.264 Video\" URL: <a href=\"http://tools.ietf.org/html/rfc3984\" class=\"reference-link\">http://tools.ietf.org/html/rfc3984</a>",
	"RFC3986":"IETF, RFC 3986, \"Uniform Resource Identifier (URI): Generic Syntax\" URL: <a href=\"http://tools.ietf.org/html/rfc3986\" class=\"reference-link\">http://tools.ietf.org/html/rfc3986</a>",
	"RFC3994":"IETF, RFC 3994, \"Indication of Message Composition for Instant Messaging\" URL: <a href=\"http://tools.ietf.org/html/rfc3994\" class=\"reference-link\">http://tools.ietf.org/html/rfc3994</a>",

	"RFC4028":"IETF, RFC 4028, \"Session Timers in the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4028\" class=\"reference-link\">http://tools.ietf.org/html/rfc4028</a>",
	"SES-TIMR":"IETF, RFC 4028, \"Session Timers in the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4028\" class=\"reference-link\">http://tools.ietf.org/html/rfc4028</a>",

	"RFC4122":"IETF, RFC 4122, \"A Universally Unique Identifier (UUID) Namespace\" URL: <a href=\"http://tools.ietf.org/html/rfc4122\" class=\"reference-link\">http://tools.ietf.org/html/rfc4122</a>",
	
	"RFC4145":"IETF, RFC 4145, \"TCP-Based Media Transport in the Session Description Protocol (SDP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4145\" class=\"reference-link\">http://tools.ietf.org/html/rfc4145</a>",
	"SDP-TCP":"IETF, RFC 4145, \"TCP-Based Media Transport in the Session Description Protocol (SDP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4145\" class=\"reference-link\">http://tools.ietf.org/html/rfc4145</a>",
	
	"RFC4234":"IETF, RFC 4234, \"Augmented BNF for Syntax Specifications: ABNF\" URL: <a href=\"http://tools.ietf.org/html/rfc4234\" class=\"reference-link\">http://tools.ietf.org/html/rfc4234</a>",
	"ABNF":"IETF, RFC 4234, \"Augmented BNF for Syntax Specifications: ABNF\" URL: <a href=\"http://tools.ietf.org/html/rfc4234\" class=\"reference-link\">http://tools.ietf.org/html/rfc4234</a>",
	
	"RFC4346":"IETF, RFC 4346, \"The Transport Layer Security (TLS) Protocol Version 1.1\" URL: <a href=\"http://tools.ietf.org/html/rfc4346\" class=\"reference-link\">http://tools.ietf.org/html/rfc4346</a>",
	
	"RFC4566":"IETF, RFC 4566, \"SDP: Session Description Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc4566\" class=\"reference-link\">http://tools.ietf.org/html/rfc4566</a>",
	"SDP":"IETF, RFC 4566, \"SDP: Session Description Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc4566\" class=\"reference-link\">http://tools.ietf.org/html/rfc4566</a>",
	
	"RFC4588":"IETF, RFC 4588, \"RTP Retransmission Payload Format\" URL: <a href=\"http://tools.ietf.org/html/rfc4588\" class=\"reference-link\">http://tools.ietf.org/html/rfc4588</a>",
	"RFC4605":"IETF, RFC 4605, \"Internet Group Management Protocol (IGMP) / Multicast Listener Discovery (MLD)-Based Multicast Forwarding (\"IGMP/MLD Proxying\")\" URL: <a href=\"http://tools.ietf.org/html/rfc4605\" class=\"reference-link\">http://tools.ietf.org/html/rfc4605</a>",
	"RFC4627":"IETF, RFC 4627, \"The application/json Media Type for JavaScript Object Notation (JSON)\" URL: <a href=\"http://tools.ietf.org/html/rfc4627\" class=\"reference-link\">http://tools.ietf.org/html/rfc4627</a>",	
	"RFC4629":"IETF, RFC 4629, \"RTP Payload Format for ITU-T Rec. H.263 Video\" URL: <a href=\"http://tools.ietf.org/html/rfc4629\" class=\"reference-link\">http://tools.ietf.org/html/rfc4629</a>",
	"RFC4749":"IETF, RFC 4749, \"RTP Payload Format for the G.729.1 Audio Codec\" URL: <a href=\"http://tools.ietf.org/html/rfc4749\" class=\"reference-link\">http://tools.ietf.org/html/rfc4749</a>",
	
	"RFC4756":"IETF, RFC 4756, \"Forward Error Correction Grouping Semantics in Session Description Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc4756\" class=\"reference-link\">http://tools.ietf.org/html/rfc4756</a>",
	"FEC":"IETF, RFC 4756, \"Forward Error Correction Grouping Semantics in Session Description Protocol\" URL: <a href=\"http://tools.ietf.org/html/rfc4756\" class=\"reference-link\">http://tools.ietf.org/html/rfc4756</a>",
	
	"RFC4787":"IETF, RFC 4787, \"Network Address Translation (NAT) Behavioural Requirements for Unicast UDP\" URL: <a href=\"http://tools.ietf.org/html/rfc4787\" class=\"reference-link\">http://tools.ietf.org/html/rfc4787</a>",
	
	"RFC4825":"IETF, RFC 4825, \"The Extensible Markup Language (XML) Configuration Access Protocol (XCAP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4825\" class=\"reference-link\">http://tools.ietf.org/html/rfc4825</a>",
	"XCAP":"IETF, RFC 4825, \"The Extensible Markup Language (XML) Configuration Access Protocol (XCAP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4825\" class=\"reference-link\">http://tools.ietf.org/html/rfc4825</a>",
	
	"RFC4867":"IETF, RFC 4867, \"RTP Payload Format and File Storage Format for the AMR and AMR-WB Audio Codecs\" URL: <a href=\"http://tools.ietf.org/html/rfc4867\" class=\"reference-link\">http://tools.ietf.org/html/rfc4867</a>",
	"RFC4961":"IETF, RFC 4961, \"Symmetric RTP/RTP Control Protocol (RTCP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4961\" class=\"reference-link\">http://tools.ietf.org/html/rfc4961</a>",
	"RFC4975":"IETF, RFC 4975, \"The Message Session Relay Protocol (MSRP)\" URL: <a href=\"http://tools.ietf.org/html/rfc4975\" class=\"reference-link\">http://tools.ietf.org/html/rfc4975</a>",
	"RFC5019":"IETF, RFC 5019, \"The Lightweight Online Certificate Status Protocol (OCSP) Profile for High-Volume Environments\" URL: <a href=\"http://tools.ietf.org/html/rfc5019\" class=\"reference-link\">http://tools.ietf.org/html/rfc5019</a>",
	"RFC5246":"IETF, RFC 5246, \"The Transport Layer Security (TLS) Protocol Version 1.2\" URL: <a href=\"http://tools.ietf.org/html/rfc5246\" class=\"reference-link\">http://tools.ietf.org/html/rfc5246</a>",
	"RFC5280":"IETF, RFC 5280, \"Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL) Profile\" URL: <a href=\"http://tools.ietf.org/html/rfc5280\" class=\"reference-link\">http://tools.ietf.org/html/rfc5280</a>",
	"RFC5404":"IETF, RFC 5404, \"RTP Payload Format for G.719\" URL: <a href=\"http://tools.ietf.org/html/rfc5404\" class=\"reference-link\">http://tools.ietf.org/html/rfc5404</a>",
	"RFC5626":"IETF, RFC 5626, \"Managing Client-Initiated Connections in the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc5626\" class=\"reference-link\">http://tools.ietf.org/html/rfc5626</a>",
	"RFC5627":"IETF, RFC 5627, \"Obtaining and Using Globally Routable User Agent URIs (GRUU) in the Session Initiation Protocol (SIP)\" URL: <a href=\"http://tools.ietf.org/html/rfc5627\" class=\"reference-link\">http://tools.ietf.org/html/rfc5627</a>",
	"RFC5746":"IETF, RFC 5746, \"Transport Layer Security (TLS) Renegotiation Indication Extension\" URL: <a href=\"http://tools.ietf.org/html/rfc5746\" class=\"reference-link\">http://tools.ietf.org/html/rfc5746</a>",
	
	"RFC5874":"IETF, RFC 5874, \"An Extensible Markup Language (XML) Document Format for Indicating A Change in XML Configuration Access Protocol (XCAP) Resources\" URL: <a href=\"http://tools.ietf.org/html/rfc5874\" class=\"reference-link\">http://tools.ietf.org/html/rfc5874</a>",
	"XCAP-DFF":"IETF, RFC 5874, \"An Extensible Markup Language (XML) Document Format for Indicating A Change in XML Configuration Access Protocol (XCAP) Resources\" URL: <a href=\"http://tools.ietf.org/html/rfc5874\" class=\"reference-link\">http://tools.ietf.org/html/rfc5874</a>",
	
	"RFC5875":"IETF, RFC 5875, \"An Extensible Markup Language (XML) Configuration Access Protocol (XCAP) Diff Event Package\" URL: <a href=\"http://tools.ietf.org/html/rfc5875\" class=\"reference-link\">http://tools.ietf.org/html/rfc5875</a>",
	"XCAP-EVT":"IETF, RFC 5875, \"An Extensible Markup Language (XML) Configuration Access Protocol (XCAP) Diff Event Package\" URL: <a href=\"http://tools.ietf.org/html/rfc5875\" class=\"reference-link\">http://tools.ietf.org/html/rfc5875</a>",
	
	"RFC6080":"IETF, RFC 6080, \"A Framework for Session Initiation Protocol User Agent Profile Delivery\" URL: <a href=\"http://tools.ietf.org/html/rfc6080\" class=\"reference-link\">http://tools.ietf.org/html/rfc6080</a>",
	"SIP-CFG":"IETF, RFC 6080, \"A Framework for Session Initiation Protocol User Agent Profile Delivery\" URL: <a href=\"http://tools.ietf.org/html/rfc6080\" class=\"reference-link\">http://tools.ietf.org/html/rfc6080</a>",
	
	"RFC6086":"IETF, RFC 6086, \"Session Initiation Protocol (SIP) INFO Method and Package Framework\" URL: <a href=\"http://tools.ietf.org/html/rfc6086\" class=\"reference-link\">http://tools.ietf.org/html/rfc6086</a>",
	"INFO-PKG":"IETF, RFC 6086, \"Session Initiation Protocol (SIP) INFO Method and Package Framework\" URL: <a href=\"http://tools.ietf.org/html/rfc6086\" class=\"reference-link\">http://tools.ietf.org/html/rfc6086</a>",
	
	"RFC6265":"IETF, RFC 6265, \"HTTP State Management Mechanism\" URL: <a href=\"http://tools.ietf.org/html/rfc6265\" class=\"reference-link\">http://tools.ietf.org/html/rfc6265</a>",
	
	"RFC6284":"IETF, RFC 6284, \"Port Mapping Between Unicast and Multicast RTP Sessions\" URL: <a href=\"http://tools.ietf.org/html/rfc6284\" class=\"reference-link\">http://tools.ietf.org/html/rfc6284</a>",
	"PORTMAP":"IETF, RFC 6284, \"Port Mapping Between Unicast and Multicast RTP Sessions\" URL: <a href=\"http://tools.ietf.org/html/rfc6284\" class=\"reference-link\">http://tools.ietf.org/html/rfc6284</a>",
	
	"RFC6285":"IETF, RFC 6285, \"Unicast-Based Rapid Acquisition of Multicast RTP Sessions\" URL: <a href=\"http://tools.ietf.org/html/rfc6285\" class=\"reference-link\">http://tools.ietf.org/html/rfc6285</a>",
	"RAMS":"IETF, RFC 6285, \"Unicast-Based Rapid Acquisition of Multicast RTP Sessions\" URL: <a href=\"http://tools.ietf.org/html/rfc6285\" class=\"reference-link\">http://tools.ietf.org/html/rfc6285</a>",
	
	"RFC6454":"IETF, RFC 6454, \"The Web Origin Concept\" URL: <a href=\"http://tools.ietf.org/html/rfc66454\" class=\"reference-link\">http://tools.ietf.org/html/rfc6454</a>",	

//ATIS
	"ATIS-IDSA":"ATIS, ATIS-0800006, IIF Default Scrambling Algorithm (IDSA)",

//W3C
	"JFIF" : "Hamilton, Eric. <a href=\"http://www.w3.org/Graphics/JPEG/jfif3.pdf\"><cite>JPEG File Interchange Format.</cite></a> Sep 1992. URL: <a href=\"http://www.w3.org/Graphics/JPEG/jfif3.pdf\" class=\"reference-link\">http://www.w3.org/Graphics/JPEG/jfif3.pdf</a> C-Cube Microsystems. Milpitas, CA, USA.",

//other	
	"GIF" : "Graphics Interchange Format version 89a, &copy; 1987, 1988, 1989, 1990, CompuServe Incorporated, Columbus, Ohio.",
	
	};


