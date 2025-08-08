import './globals.d.ts'

const GroupOfThreeDigitsRegexp = /\B(?=(\d{3})+(?!\d))/g

String.prototype.toFirstLetterCapitalize = function (): string {
	if (!this) return this // Handle empty or null strings gracefully
	return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

String.prototype.toGroupOfThreeDigits = function (): string {
	if (!this) return this // Handle empty or null strings gracefully
	return this.replace(GroupOfThreeDigitsRegexp, ' ')
}

String.prototype.toCommaSeperatedDigits = function (): string {
	if (!this) return this // Handle empty or null strings gracefully
	return this.replace(GroupOfThreeDigitsRegexp, ',')
}

/**
 * Remove diacritics when doing the research
 */
String.prototype.removeAccents = function (): string {
	if (!this) return this // Handle empty or null strings gracefully
	return this.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
