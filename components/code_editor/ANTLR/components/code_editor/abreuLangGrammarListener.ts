// Generated from ./components/code_editor/abreuLangGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AbreuExpressionsContext } from "./abreuLangGrammarParser";
import { SpeakExpressionContext } from "./abreuLangGrammarParser";
import { ChangeBgExpressionContext } from "./abreuLangGrammarParser";
import { NarrateExpressionContext } from "./abreuLangGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `abreuLangGrammarParser`.
 */
export interface abreuLangGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `abreuLangGrammarParser.abreuExpressions`.
	 * @param ctx the parse tree
	 */
	enterAbreuExpressions?: (ctx: AbreuExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `abreuLangGrammarParser.abreuExpressions`.
	 * @param ctx the parse tree
	 */
	exitAbreuExpressions?: (ctx: AbreuExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `abreuLangGrammarParser.speakExpression`.
	 * @param ctx the parse tree
	 */
	enterSpeakExpression?: (ctx: SpeakExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `abreuLangGrammarParser.speakExpression`.
	 * @param ctx the parse tree
	 */
	exitSpeakExpression?: (ctx: SpeakExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `abreuLangGrammarParser.changeBgExpression`.
	 * @param ctx the parse tree
	 */
	enterChangeBgExpression?: (ctx: ChangeBgExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `abreuLangGrammarParser.changeBgExpression`.
	 * @param ctx the parse tree
	 */
	exitChangeBgExpression?: (ctx: ChangeBgExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `abreuLangGrammarParser.narrateExpression`.
	 * @param ctx the parse tree
	 */
	enterNarrateExpression?: (ctx: NarrateExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `abreuLangGrammarParser.narrateExpression`.
	 * @param ctx the parse tree
	 */
	exitNarrateExpression?: (ctx: NarrateExpressionContext) => void;
}

