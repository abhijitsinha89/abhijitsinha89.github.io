(function () {
    'use strict';

    var serviceId = 'imgdata';
    angular.module('app').factory(serviceId, ['common', '$http', dbdata]);

    function dbdata(common, $resource) {
        var $q = common.$q;

        var service = {
            timelineData: timelineData,
        };

        return service;

        function timelineData() {
            var timeline =
            [
            {
                "Year": "2014",
                "Updates": [
                    { "id": "2014U07", "Description": "After numerous changes in the design, <a href='http://flashspark.in' target='_blank'>Flashspark.in </a> is running on a new revamped version!" },
                    { "id": "2014U06", "Description": "Beta version of <a href='http://hummingnest.com' target='_blank'>HummingNest</a> launched, it runs on wordpress with a custom theme for the webapp" },
                    { "id": "2014U05", "Description": "alpha version of <a href='http://scrollkart.com' target='_blank'>Scrollkart</a> launched " },
                    { "id": "2014U04", "Description": "Moved from <strong>Hyderabad to Bangalore </strong> and started working for <strong> as a Usability Developer in Wipro, Bangalore </strong>" },
                    { "id": "2014U03", "Description": "Reviving my old web magazine <a href='http://bearded-penguins.com' target='_blank'>www.visivoline.com (Bearded Penguins)</a> with <a href='http://facebook.com/'>Utkarsh</a> and <a href='http://facebook.com/'>Ankit</a> in a new package with the technology web loves! AngularJS <i class='emo-happy'></i>" },
                    { "id": "2014U02", "Description": "Excited to Work on mobile platfroms" },
                    { "id": "2014U01", "Description": "Immediate Targets: Angular JS and Node JS" }
                ]
            },
            {
                "Year": "2013",
                "Updates": [
                    { "id": "2013U02", "Description": "Designed and launched <em>www.vishaltraders.org</em>. This website is retired now" },
                    { "id": "2013U01", "Description": "Launched <a href='http://www.old.flashspark.in' target='_blank'> FlashSpark V1</a> It is built on ASP.NET MVC Web API and AngularJS and relies a lot on SVG and Bootstrap CSS" }
                ]
            },
            {
                "Year": "2012",
                "Updates": [
                    { "id": "2012U05", "Description": "Completed a project dessertation on creating on an <em>Low Cost Effective Home Automation System.</em> It was built primarily on Matlab and C#, Drupal for front end design, Atmega 16 MCU for hardware." },
                    { "id": "2012U04", "Description": "Graduated from Amity University, Noida" },
                    { "id": "2012U03", "Description": "Joined Wipro Technologies as a Project Engineer in Hyderabad" },
                    { "id": "2012U02", "Description": "Trained in MS Technolgies" },
                    { "id": "2012U01", "Description": "Joined a Microsoft based project as a test Engineer" }
                ]
            },
            {
                "Year": "Daysofyore",
                "Updates": [
                { "id": "DaysofyoreU08", "Description": "<strong>2011:</strong> designed and administered www.weatamity.com(we used to post assignments and old testpapers for public benefit! :P )" },
                { "id": "DaysofyoreU07", "Description": "<strong>2011:</strong> Internship in Whirlpool of India" },
                { "id": "DaysofyoreU06", "Description": "<strong>2010:</strong> Inhouse project 'German to English translater'" },
                { "id": "DaysofyoreU05", "Description": "<strong>2009:</strong> Started an online magazine with Utkarsh bhatia, www.visivonline.com, we are in the process of reviving it again" },
                { "id": "DaysofyoreU04", "Description": "<strong>2009:</strong> Designed a wired robot with Abhijeet Verma for IIT Kanpur techfest 'Techkriti', great learning experience" },
                { "id": "DaysofyoreU03", "Description": "<strong>2008:</strong> Joined Engineering in 'Electronics and Communication'from Amity University'" },
                { "id": "DaysofyoreU02", "Description": "<strong>2007:</strong> Completed Schooling from DPSG" },
                { "id": "DaysofyoreU01", "Description": "<strong>1989:</strong>  Born! :P" }
                ]
            }
            ];
            return $q.when(timeline);

        }
    }

})();