import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main class="card">
      <span class="badge">Angular + plain CSS</span>
      <h1>{{ title }}</h1>
      <p>Standalone components, styled with hand-written CSS — no UI framework.</p>
      <button type="button" (click)="clicks = clicks + 1">Clicked {{ clicks }}×</button>
    </main>
  `,
  styles: [`
    .card {
      background: var(--card); padding: 2.5rem 3rem; border-radius: 16px;
      max-width: 420px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,.4);
    }
    .badge {
      display: inline-block; font-size: .75rem; letter-spacing: .08em; text-transform: uppercase;
      color: var(--accent); border: 1px solid var(--accent); border-radius: 999px; padding: .25rem .75rem;
    }
    h1 { margin: 1rem 0 .5rem; font-size: 1.6rem; }
    p { color: var(--muted); margin: 0 0 1.5rem; line-height: 1.5; }
    button {
      background: var(--accent); color: #042f3e; border: 0; border-radius: 10px;
      padding: .7rem 1.4rem; font-size: 1rem; font-weight: 600; cursor: pointer;
    }
    button:hover { filter: brightness(1.08); }
  `],
})
export class AppComponent {
  title = 'It runs 🎉';
  clicks = 0;
}
