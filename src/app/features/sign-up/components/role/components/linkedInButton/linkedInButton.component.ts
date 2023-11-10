import { Component, OnInit } from "@angular/core";
import { LinkedinService } from "./linkedin.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import InAppBrowser from "@awesome-cordova-library/inappbrowser";




@Component({
  selector: 'linkedin-button',
  templateUrl: './linkedInButton.component.html',
  styleUrls: ['./linkedInButton.component.scss'],
  standalone: true,
  providers: [LinkedinService,

  ], imports: [HttpClientModule]
})
export class LinkedInButtonComponent implements OnInit {

  constructor(private linkedinService: LinkedinService, private http: HttpClient) {

  }
  async ngOnInit() {
    const searchParams = new URLSearchParams(location.search)
    const token = searchParams.get('token');
    if (token) {
      const response = await fetch('http://localhost:3000/user/', { headers: { 'authorization': 'Bearer ' + token } });
      const json = await response.json();
      console.log(json)
      fetch('http://localhost:3000/user/me', { headers: { 'authorization': 'Bearer ' + token } })
        .then(response => response.json()).then(json => console.log(json));

    }

  }

  onClick() {
    const id = 'linkedInClientId';
    const clientId = process.env["CLIENT_ID"] as string;
    localStorage.setItem(id, clientId);
    const searchParams = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      redirect_uri: process.env["OAUTH2_REDIRECT_URL"] as string,
      scope: 'openid,profile,email,w_member_social'
    });
    InAppBrowser.open('https://www.linkedin.com/oauth/v2/authorization?' + searchParams.toString(), '_blank', { location: 'no' });

  }


}
