/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

@Component({
  providers: [],
  selector: 'clr-control-error',
  template: `
    <ng-content></ng-content>
    `,
  host: { '[class.clr-subtext]': 'true' },
})
export class ClrControlError {}
