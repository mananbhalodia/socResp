import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from './SimpleInput';

// const $btn = 'f6 link dim bn br2 ph3 pv2 mr2 dib white bg-dark-blue';

// export default observer(({ form }) => (
//   <form onSubmit={form.onSubmit}>
//     <SimpleInput field={form.$('email')} />
//     <SimpleInput field={form.$('password')} />
//     <SimpleInput field={form.$('passwordConfirm')} />

//     <br />
//     <button type="submit" className={$btn} onClick={form.onSubmit}>Submit</button>
//     <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
//     <button type="button" className={$btn} onClick={form.onReset}>Reset</button>

//     <p>{form.error}</p>
//   </form>
// ));

export default observer(({ form }) => (
    <form>
      <label htmlFor={form.$('email').id}>
        {form.$('email').label}
      </label>
      <input {...form.$('email').bind()} />
      <p>{form.$('email').error}</p>
  
      <label htmlFor={form.$('password').id}>
        {form.$('password').label}
      </label>
      <input {...form.$('password').bind({ type: 'password' })} />
      <p>{form.$('password').error}</p>
  
      <button type="submit" onClick={form.onSubmit}>Submit</button>
      <button type="button" onClick={form.onReset}>Reset</button>
      <button type="button" onClick={form.onClear}>Clear</button>
  
      <p>{form.error}</p>
    </form>
  ));