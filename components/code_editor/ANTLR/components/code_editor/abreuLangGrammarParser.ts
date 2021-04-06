// Generated from ./components/code_editor/abreuLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { abreuLangGrammarListener } from "./abreuLangGrammarListener";

export class abreuLangGrammarParser extends Parser {
	public static readonly CHARACTER = 1;
	public static readonly SPEAK = 2;
	public static readonly BACKGROUND = 3;
	public static readonly NARRATE = 4;
	public static readonly STRING = 5;
	public static readonly EOL = 6;
	public static readonly WS = 7;
	public static readonly RULE_abreuExpressions = 0;
	public static readonly RULE_speakExpression = 1;
	public static readonly RULE_changeBgExpression = 2;
	public static readonly RULE_narrateExpression = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"abreuExpressions", "speakExpression", "changeBgExpression", "narrateExpression",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'CHARACTER'", "'SPEAK'", "'BACKGROUND'", "'NARRATE'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "CHARACTER", "SPEAK", "BACKGROUND", "NARRATE", "STRING", "EOL", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(abreuLangGrammarParser._LITERAL_NAMES, abreuLangGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return abreuLangGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "abreuLangGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return abreuLangGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return abreuLangGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(abreuLangGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public abreuExpressions(): AbreuExpressionsContext {
		let _localctx: AbreuExpressionsContext = new AbreuExpressionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, abreuLangGrammarParser.RULE_abreuExpressions);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 11;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 8;
					this.speakExpression();
					}
					}
				}
				this.state = 13;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === abreuLangGrammarParser.BACKGROUND) {
				{
				{
				this.state = 14;
				this.changeBgExpression();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === abreuLangGrammarParser.SPEAK) {
				{
				{
				this.state = 20;
				this.narrateExpression();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public speakExpression(): SpeakExpressionContext {
		let _localctx: SpeakExpressionContext = new SpeakExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, abreuLangGrammarParser.RULE_speakExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 26;
			this.match(abreuLangGrammarParser.SPEAK);
			this.state = 27;
			this.match(abreuLangGrammarParser.CHARACTER);
			this.state = 28;
			this.match(abreuLangGrammarParser.STRING);
			this.state = 29;
			this.match(abreuLangGrammarParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public changeBgExpression(): ChangeBgExpressionContext {
		let _localctx: ChangeBgExpressionContext = new ChangeBgExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, abreuLangGrammarParser.RULE_changeBgExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 31;
			this.match(abreuLangGrammarParser.BACKGROUND);
			this.state = 32;
			this.match(abreuLangGrammarParser.STRING);
			this.state = 33;
			this.match(abreuLangGrammarParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public narrateExpression(): NarrateExpressionContext {
		let _localctx: NarrateExpressionContext = new NarrateExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, abreuLangGrammarParser.RULE_narrateExpression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(abreuLangGrammarParser.SPEAK);
			this.state = 36;
			this.match(abreuLangGrammarParser.NARRATE);
			this.state = 37;
			this.match(abreuLangGrammarParser.STRING);
			this.state = 38;
			this.match(abreuLangGrammarParser.EOL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\t+\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x07\x02\f\n\x02" +
		"\f\x02\x0E\x02\x0F\v\x02\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v" +
		"\x02\x03\x02\x07\x02\x18\n\x02\f\x02\x0E\x02\x1B\v\x02\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x02\x02\x02\x06\x02\x02\x04\x02\x06\x02" +
		"\b\x02\x02\x02\x02)\x02\r\x03\x02\x02\x02\x04\x1C\x03\x02\x02\x02\x06" +
		"!\x03\x02\x02\x02\b%\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v\n\x03\x02\x02" +
		"\x02\f\x0F\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02\x02\x02\x0E" +
		"\x13\x03\x02\x02\x02\x0F\r\x03\x02\x02\x02\x10\x12\x05\x06\x04\x02\x11" +
		"\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02\x13" +
		"\x14\x03\x02\x02\x02\x14\x19\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x16" +
		"\x18\x05\b\x05\x02\x17\x16\x03\x02\x02\x02\x18\x1B\x03\x02\x02\x02\x19" +
		"\x17\x03\x02\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x03\x03\x02\x02\x02\x1B" +
		"\x19\x03\x02\x02\x02\x1C\x1D\x07\x04\x02\x02\x1D\x1E\x07\x03\x02\x02\x1E" +
		"\x1F\x07\x07\x02\x02\x1F \x07\b\x02\x02 \x05\x03\x02\x02\x02!\"\x07\x05" +
		"\x02\x02\"#\x07\x07\x02\x02#$\x07\b\x02\x02$\x07\x03\x02\x02\x02%&\x07" +
		"\x04\x02\x02&\'\x07\x06\x02\x02\'(\x07\x07\x02\x02()\x07\b\x02\x02)\t" +
		"\x03\x02\x02\x02\x05\r\x13\x19";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!abreuLangGrammarParser.__ATN) {
			abreuLangGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(abreuLangGrammarParser._serializedATN));
		}

		return abreuLangGrammarParser.__ATN;
	}

}

export class AbreuExpressionsContext extends ParserRuleContext {
	public speakExpression(): SpeakExpressionContext[];
	public speakExpression(i: number): SpeakExpressionContext;
	public speakExpression(i?: number): SpeakExpressionContext | SpeakExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpeakExpressionContext);
		} else {
			return this.getRuleContext(i, SpeakExpressionContext);
		}
	}
	public changeBgExpression(): ChangeBgExpressionContext[];
	public changeBgExpression(i: number): ChangeBgExpressionContext;
	public changeBgExpression(i?: number): ChangeBgExpressionContext | ChangeBgExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChangeBgExpressionContext);
		} else {
			return this.getRuleContext(i, ChangeBgExpressionContext);
		}
	}
	public narrateExpression(): NarrateExpressionContext[];
	public narrateExpression(i: number): NarrateExpressionContext;
	public narrateExpression(i?: number): NarrateExpressionContext | NarrateExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NarrateExpressionContext);
		} else {
			return this.getRuleContext(i, NarrateExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return abreuLangGrammarParser.RULE_abreuExpressions; }
	// @Override
	public enterRule(listener: abreuLangGrammarListener): void {
		if (listener.enterAbreuExpressions) {
			listener.enterAbreuExpressions(this);
		}
	}
	// @Override
	public exitRule(listener: abreuLangGrammarListener): void {
		if (listener.exitAbreuExpressions) {
			listener.exitAbreuExpressions(this);
		}
	}
}


export class SpeakExpressionContext extends ParserRuleContext {
	public SPEAK(): TerminalNode { return this.getToken(abreuLangGrammarParser.SPEAK, 0); }
	public CHARACTER(): TerminalNode { return this.getToken(abreuLangGrammarParser.CHARACTER, 0); }
	public STRING(): TerminalNode { return this.getToken(abreuLangGrammarParser.STRING, 0); }
	public EOL(): TerminalNode { return this.getToken(abreuLangGrammarParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return abreuLangGrammarParser.RULE_speakExpression; }
	// @Override
	public enterRule(listener: abreuLangGrammarListener): void {
		if (listener.enterSpeakExpression) {
			listener.enterSpeakExpression(this);
		}
	}
	// @Override
	public exitRule(listener: abreuLangGrammarListener): void {
		if (listener.exitSpeakExpression) {
			listener.exitSpeakExpression(this);
		}
	}
}


export class ChangeBgExpressionContext extends ParserRuleContext {
	public BACKGROUND(): TerminalNode { return this.getToken(abreuLangGrammarParser.BACKGROUND, 0); }
	public STRING(): TerminalNode { return this.getToken(abreuLangGrammarParser.STRING, 0); }
	public EOL(): TerminalNode { return this.getToken(abreuLangGrammarParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return abreuLangGrammarParser.RULE_changeBgExpression; }
	// @Override
	public enterRule(listener: abreuLangGrammarListener): void {
		if (listener.enterChangeBgExpression) {
			listener.enterChangeBgExpression(this);
		}
	}
	// @Override
	public exitRule(listener: abreuLangGrammarListener): void {
		if (listener.exitChangeBgExpression) {
			listener.exitChangeBgExpression(this);
		}
	}
}


export class NarrateExpressionContext extends ParserRuleContext {
	public SPEAK(): TerminalNode { return this.getToken(abreuLangGrammarParser.SPEAK, 0); }
	public NARRATE(): TerminalNode { return this.getToken(abreuLangGrammarParser.NARRATE, 0); }
	public STRING(): TerminalNode { return this.getToken(abreuLangGrammarParser.STRING, 0); }
	public EOL(): TerminalNode { return this.getToken(abreuLangGrammarParser.EOL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return abreuLangGrammarParser.RULE_narrateExpression; }
	// @Override
	public enterRule(listener: abreuLangGrammarListener): void {
		if (listener.enterNarrateExpression) {
			listener.enterNarrateExpression(this);
		}
	}
	// @Override
	public exitRule(listener: abreuLangGrammarListener): void {
		if (listener.exitNarrateExpression) {
			listener.exitNarrateExpression(this);
		}
	}
}


