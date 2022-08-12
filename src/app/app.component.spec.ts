import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
    });

    it("should create the app", () => {
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have as title 'norandiaconu-github-io'`, () => {
        const app = fixture.componentInstance;
        expect(app.title).toEqual("norandiaconu-github-io");
    });

    it("should render title", () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector(".center-title")?.textContent).toContain("Angular Software Developer");
    });

    it(`should toggle display`, () => {
        const app = fixture.componentInstance;
        app.display = false;
        app.toggle();
        expect(app.display).toBeTruthy();
    });

    it(`should toggle credits`, () => {
        const app = fixture.componentInstance;
        app.displayCredits = false;
        app.toggleCredits();
        expect(app.displayCredits).toBeTruthy();
    });

    it(`should show skills`, async () => {
        const app = fixture.componentInstance;
        app.technicalVisible = false;
        app.timeout = 1;
        await app.showSkills();
        expect(app.technicalVisible).toBeTruthy();
    });

    it(`should display about section in landscape`, () => {
        const app = fixture.componentInstance;
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.scrollY = 768;
        app.scroll();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeFalsy();
        expect(app.contactVisible).toBeFalsy();
    });

    it(`should display about and experience sections in landscape`, () => {
        const app = fixture.componentInstance;
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.scrollY = 1500;
        app.scroll();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeFalsy();
    });

    it(`should display all sections in landscape`, () => {
        const app = fixture.componentInstance;
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 1024;
        window.innerHeight = 768;
        window.scrollY = 2500;
        app.scroll();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeTruthy();
    });

    it(`should display about section in portrait`, () => {
        const app = fixture.componentInstance;
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 768;
        window.innerHeight = 1024;
        window.scrollY = 300;
        app.scroll();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeFalsy();
        expect(app.contactVisible).toBeFalsy();
    });

    it(`should display about and experience sections in portrait`, () => {
        const app = fixture.componentInstance;
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 768;
        window.innerHeight = 1024;
        window.scrollY = 1200;
        app.scroll();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeFalsy();
    });

    it(`should display all sections in portrait`, () => {
        const app = fixture.componentInstance;
        app.aboutVisible = false;
        app.experienceVisible = false;
        app.contactVisible = false;
        window.innerWidth = 768;
        window.innerHeight = 1024;
        window.scrollY = 2200;
        app.scroll();
        expect(app.aboutVisible).toBeTruthy();
        expect(app.experienceVisible).toBeTruthy();
        expect(app.contactVisible).toBeTruthy();
    });
});
