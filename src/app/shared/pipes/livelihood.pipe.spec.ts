import { LivelihoodPipe } from './livelihood.pipe';
import { LanguageService } from 'src/app/core/language/language.service';
import { TestBed } from '@angular/core/testing';

describe('LivelihoodPipe', () => {
  it('create an instance', () => {
    const pipe = new LivelihoodPipe(TestBed.inject(LanguageService));
    expect(pipe).toBeTruthy();
  });
});
