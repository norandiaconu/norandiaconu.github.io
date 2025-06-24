import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let fixture: ComponentFixture<AppComponent>;
    let app: AppComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
    });

    it('should create the app', () => {
        expect(app).toBeTruthy();
    });

    it('should have as title norandiaconu-github-io', () => {
        expect(app.title).toEqual('norandiaconu-github-io');
    });

    it('should render title', () => {
        const element = fixture.nativeElement as HTMLElement;
        expect(element.querySelector('.center-title')?.textContent).toContain('Angular Software Developer');
    });

    it('should toggle display', () => {
        app.display = false;
        app['toggle']();
        expect(app.display).toBeTruthy();
    });

    it('should toggle credits', () => {
        app.displayCredits = false;
        app['toggleCredits']();
        expect(app.displayCredits).toBeTruthy();
    });

    it('should show skills', async () => {
        app.technicalVisible = false;
        app.timeout = 1;
        await app['showSkills']();
        expect(app.technicalVisible).toBeTruthy();
    });

    it('should display about section in landscape', () => {
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.scrollY = 768;
        app['scroll']();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeFalsy();
        expect(app.contactVisible).toBeFalsy();
    });

    it('should display about and experience sections in landscape', () => {
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.scrollY = 1500;
        app['scroll']();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeFalsy();
    });

    it('should display all sections in landscape', () => {
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.scrollY = 2500;
        app['scroll']();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeTruthy();
    });

    it('should display about section in portrait', () => {
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 768;
        window.innerHeight = 1024;
        window.scrollY = 300;
        app['scroll']();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeFalsy();
        expect(app.contactVisible).toBeFalsy();
    });

    it('should display about and experience sections in portrait', () => {
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 768;
        window.innerHeight = 1024;
        window.scrollY = 1200;
        app['scroll']();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeFalsy();
    });

    it('should display all sections in portrait', () => {
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 768;
        window.innerHeight = 1024;
        window.scrollY = 2200;
        app['scroll']();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeTruthy();
    });
});
