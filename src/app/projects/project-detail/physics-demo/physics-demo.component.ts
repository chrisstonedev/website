import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physics-demo',
  templateUrl: './physics-demo.component.html',
  styleUrls: ['./physics-demo.component.css'],
})
export class PhysicsDemoComponent implements OnInit {
  ngOnInit(): void {
    var A = 0;
    var kg = 0;
    var m = 0;
    var s = 0;
    var label = document.getElementById('label');
    var reset = document.getElementById('reset');
    var divBtn = document.getElementById('divBtn');
    var ABtn = document.getElementById('ABtn');
    var kgBtn = document.getElementById('kgBtn');
    var mBtn = document.getElementById('mBtn');
    var sBtn = document.getElementById('sBtn');
    var CBtn = document.getElementById('CBtn');
    var FBtn = document.getElementById('FBtn');
    var HBtn = document.getElementById('HBtn');
    var HzBtn = document.getElementById('HzBtn');
    var JBtn = document.getElementById('JBtn');
    var NBtn = document.getElementById('NBtn');
    var PaBtn = document.getElementById('PaBtn');
    var siemensBtn = document.getElementById('siemensBtn');
    var TBtn = document.getElementById('TBtn');
    var VBtn = document.getElementById('VBtn');
    var WBtn = document.getElementById('WBtn');
    var weberBtn = document.getElementById('weberBtn');
    var omegaBtn = document.getElementById('omegaBtn');
    var measLbl = document.getElementById('measLbl');
    var abbrLbl = document.getElementById('abbrLbl');
    var multiDiv = 1;
    var debug = 0;

    function enableButton(button) {
      button.disabled = false;
      button.style.background = 'lightblue';
      button.style.border = '3px outset lightblue';
      button.style.color = 'darkblue';
    }
    function displayName() {
      var abbreviation = '';
      var measurement = '';
      if (A === 0) {
        if (kg === 0) {
          if (m === 0) {
            if (s === 1) {
              abbreviation = 's - second';
              measurement = 'time (t)';
            } else if (s === -1) {
              abbreviation = 'Hz - hertz';
              enableButton(HzBtn);
            }
          } else if (m === 1) {
            if (s === 0) {
              abbreviation = 'm - meter';
              measurement = 'displacement (x)';
            } else if (s === -1) {
              measurement = 'velocity (v)';
            } else if (s === -2) {
              measurement = 'acceleration (a)';
            }
          } else if (m === 2) {
            if (s === 0) {
              measurement = 'area';
            }
          } else if (m === 3) {
            if (s === 0) {
              measurement = 'volume';
            }
          }
        } else if (kg === 1) {
          if (m === 0) {
            if (s === 0) {
              abbreviation = 'kg - kilogram';
              measurement = 'mass (m)';
            }
          } else if (m === 1) {
            if (s === -2) {
              abbreviation = 'N - newton';
              measurement = 'force (F)';
              enableButton(NBtn);
            }
          } else if (m === 2) {
            if (s === -2) {
              abbreviation = 'J - joule';
              measurement = 'work (W) or energy (E)';
              enableButton(JBtn);
            } else if (s === -3) {
              abbreviation = 'W - watt';
              measurement = 'energy conversion (W)';
              enableButton(WBtn);
            }
          } else if (m === -1) {
            if (s === -2) {
              abbreviation = 'Pa - pascal';
              measurement = 'pressure (P)';
              enableButton(PaBtn);
            }
          }
        }
      } else if (A === 1) {
        if (kg === 0) {
          if (m === 0) {
            if (s === 0) {
              abbreviation = 'A - ampere';
              measurement = 'current (I)';
            } else if (s === 1) {
              abbreviation = 'C - coulomb';
              measurement = 'charge (q)';
              enableButton(CBtn);
            }
          }
        }
      } else if (A === 2) {
        if (kg === -1) {
          if (m === -2) {
            if (s === 3) {
              abbreviation = 'S - siemens';
              measurement = 'electrical conductance (G)';
              enableButton(siemensBtn);
            } else if (s === 4) {
              abbreviation = 'F - farad';
              measurement = 'capacitance (C)';
              enableButton(FBtn);
            }
          } else if (m === -3) {
            if (s === 3) {
              measurement = 'conductivity (σ)';
            }
          }
        }
      } else if (A === -1) {
        if (kg === 1) {
          if (m === 0) {
            if (s === -2) {
              abbreviation = 'T - tesla';
              measurement = 'magnetic flux density (B)';
              enableButton(TBtn);
            }
          } else if (m === 2) {
            if (s === -2) {
              abbreviation = 'Wb - weber';
              measurement = 'magnetic flux (Φ)';
              enableButton(weberBtn);
            } else if (s === -3) {
              abbreviation = 'V - volt';
              measurement = 'voltage (V)';
              enableButton(VBtn);
            }
          }
        }
      } else if (A === -2) {
        if (kg === 1) {
          if (m === 2) {
            if (s === -3) {
              abbreviation = '(Omega) - ohm';
              measurement = 'resistance (R)';
              enableButton(omegaBtn);
            } else if (s === -2) {
              abbreviation = 'H - henry';
              measurement = 'inductance (L)';
              enableButton(HBtn);
            }
          }
        }
      }
      abbrLbl.innerHTML = abbreviation;
      measLbl.innerHTML = measurement;
    }
    function unsetDivide() {
      divBtn.style.border = '3px lightblue outset';
      divBtn.style.background = 'lightblue';
      multiDiv = 1;
    }
    function displayFormula() {
      var formula = '';
      if (kg !== 0) {
        if (formula) {
          formula += ' &#8226; ';
        }
        formula += 'kg';
        if (kg !== 1) {
          formula += '<sup>' + kg + '</sup>';
        }
      }
      if (m !== 0) {
        if (formula) {
          formula += ' &#8226; ';
        }
        formula += 'm';
        if (m !== 1) {
          formula += '<sup>' + m + '</sup>';
        }
      }
      if (s !== 0) {
        if (formula) {
          formula += ' &#8226; ';
        }
        formula += 's';
        if (s !== 1) {
          formula += '<sup>' + s + '</sup>';
        }
      }
      if (A !== 0) {
        if (formula) {
          formula += ' &#8226; ';
        }
        formula += 'A';
        if (A !== 1) {
          formula += '<sup>' + A + '</sup>';
        }
      }
      label.innerHTML = formula;
      displayName();
      unsetDivide();
    }

    enableButton(ABtn);
    enableButton(kgBtn);
    enableButton(mBtn);
    enableButton(sBtn);
    enableButton(divBtn);
    enableButton(reset);
    ABtn.addEventListener('click', function () {
      A += multiDiv;
      displayFormula();
    });
    kgBtn.addEventListener('click', function () {
      kg += multiDiv;
      displayFormula();
    });
    mBtn.addEventListener('click', function () {
      m += multiDiv;
      displayFormula();
    });
    sBtn.addEventListener('click', function () {
      s += multiDiv;
      displayFormula();
    });
    CBtn.addEventListener('click', function () {
      s += multiDiv;
      A += multiDiv;
      displayFormula();
    });
    FBtn.addEventListener('click', function () {
      kg += multiDiv * -1;
      m += multiDiv * -2;
      s += multiDiv * 4;
      A += multiDiv * 2;
      displayFormula();
    });
    HBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * 2;
      s += multiDiv * -2;
      A += multiDiv * -2;
      displayFormula();
    });
    HzBtn.addEventListener('click', function () {
      s += multiDiv * -1;
      displayFormula();
    });
    JBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * 2;
      s += multiDiv * -2;
      displayFormula();
    });
    NBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv;
      s += multiDiv * -2;
      displayFormula();
    });
    PaBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * -1;
      s += multiDiv * -2;
      displayFormula();
    });
    siemensBtn.addEventListener('click', function () {
      kg += multiDiv * -1;
      m += multiDiv * -2;
      s += multiDiv * 3;
      A += multiDiv * 2;
      displayFormula();
    });
    TBtn.addEventListener('click', function () {
      kg += multiDiv;
      s += multiDiv * -2;
      A += multiDiv * -1;
      displayFormula();
    });
    VBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * 2;
      s += multiDiv * -3;
      A += multiDiv * -1;
      displayFormula();
    });
    WBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * 2;
      s += multiDiv * -3;
      displayFormula();
    });
    weberBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * 2;
      s += multiDiv * -2;
      A += multiDiv * -1;
      displayFormula();
    });
    omegaBtn.addEventListener('click', function () {
      kg += multiDiv;
      m += multiDiv * 2;
      s += multiDiv * -3;
      A += multiDiv * -2;
      displayFormula();
    });
    divBtn.addEventListener('click', function () {
      if (multiDiv === 1) {
        divBtn.style.border = '3px blue inset';
        divBtn.style.background = 'blue';
        multiDiv = -1;
      } else {
        unsetDivide();
      }
    });
    reset.addEventListener('click', function () {
      A = 0;
      kg = 0;
      m = 0;
      s = 0;
      displayFormula();
    });
    document.addEventListener(
      'keydown',
      function (event) {
        if (debug > 0) {
          alert(event.keyCode);
        }
        switch (event.keyCode) {
          case 48:
            reset.click();
            break;
          case 65:
            ABtn.click();
            break;
          case 66:
            weberBtn.click();
            break;
          case 67:
            CBtn.click();
            break;
          case 70:
            FBtn.click();
            break;
          case 71:
            siemensBtn.click();
            break;
          case 72:
            HBtn.click();
            break;
          case 74:
            JBtn.click();
            break;
          case 75:
            kgBtn.click();
            break;
          case 77:
            mBtn.click();
            break;
          case 78:
            NBtn.click();
            break;
          case 79:
            omegaBtn.click();
            break;
          case 80:
            PaBtn.click();
            break;
          case 83:
            sBtn.click();
            break;
          case 84:
            TBtn.click();
            break;
          case 86:
            VBtn.click();
            break;
          case 87:
            WBtn.click();
            break;
          case 90:
            HzBtn.click();
            break;
          case 191:
            divBtn.click();
            break;
          case 192:
            debug = 2;
            break;
        }
        debug--;
      },
      true
    );
  }
}
