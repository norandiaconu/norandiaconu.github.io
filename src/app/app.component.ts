import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('fade', [transition(':enter', [style({ opacity: 0 }), animate('0.5s ease-out', style({ opacity: 1 }))])]),
        trigger('slide-right', [
            transition(':enter', [
                style({ transform: 'translateX(-100%)' }),
                animate('0.5s ease-out', style({ transform: 'translateX(0)' }))
            ])
        ])
    ],
    imports: [NgStyle]
})
export class AppComponent {
    title = 'norandiaconu-github-io';
    timeout = 500;
    display = false;
    displayCredits = false;
    aboutVisible = false;

    angularVisible = false;
    javaVisible = false;
    htmlVisible = false;
    scssVisible = false;
    javascriptVisible = false;
    nodeVisible = false;
    sqlVisible = false;
    educationalVisible = false;
    technicalVisible = false;

    experienceVisible = false;
    contactVisible = false;
    totalHeight = 0;

    @HostListener('window:scroll')
    private scroll(): void {
        if (window.innerWidth > window.innerHeight) {
            if (window.scrollY > window.innerHeight * 0.7) {
                this.aboutVisible = true;
                this.showSkills();
            }
            if (window.scrollY > window.innerHeight * 1.7) {
                this.experienceVisible = true;
            }
            if (window.scrollY > window.innerHeight * 2.6) {
                this.contactVisible = true;
            }
        } else {
            if (window.scrollY > window.innerHeight * 0.2) {
                this.aboutVisible = true;
                this.showSkills();
            }
            if (window.scrollY > window.innerHeight * 1.1) {
                this.experienceVisible = true;
            }
            if (window.scrollY > window.innerHeight * 2.1) {
                this.contactVisible = true;
            }
        }
    }

    protected toggle(): void {
        this.display = !this.display;
        this.totalHeight = document.documentElement.scrollHeight;
    }

    protected toggleCredits(): void {
        this.displayCredits = !this.displayCredits;
        this.totalHeight = document.documentElement.scrollHeight;
    }

    private delay(): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, this.timeout));
    }

    private async showSkills(): Promise<void> {
        await this.delay();
        this.angularVisible = true;
        await this.delay();
        this.javaVisible = true;
        await this.delay();
        this.htmlVisible = true;
        await this.delay();
        this.scssVisible = true;
        await this.delay();
        this.javascriptVisible = true;
        await this.delay();
        this.nodeVisible = true;
        await this.delay();
        this.sqlVisible = true;
        await this.delay();
        this.educationalVisible = true;
        await this.delay();
        this.technicalVisible = true;
    }
}
